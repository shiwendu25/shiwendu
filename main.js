// ============================================
// SS TOOLS HUB - MAIN JAVASCRIPT
// Cart, Reviews, and Common Functions
// ============================================

// ============================================
// SHOPPING CART FUNCTIONS
// ============================================

function getCart() {
    const cart = localStorage.getItem('sshub_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('sshub_cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(toolId) {
    const cart = getCart();
    const exists = cart.find(item => item.id === toolId);
    
    if (exists) {
        showNotification('Already in cart!', 'info');
        return;
    }
    
    cart.push({ id: toolId, addedAt: new Date().toISOString() });
    saveCart(cart);
    showNotification('✅ Added to cart!', 'success');
    
    // Update button text if on tools page
    const btn = document.querySelector(`.btn-add-cart[data-id="${toolId}"]`);
    if (btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> In Cart';
        btn.classList.add('in-cart');
        btn.onclick = () => window.location.href = 'cart.html';
    }
}

function removeFromCart(toolId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== toolId);
    saveCart(cart);
    
    // Refresh cart page if visible
    if (typeof renderCart === 'function') {
        renderCart();
    }
    
    showNotification('Removed from cart', 'info');
}

function isInCart(toolId) {
    const cart = getCart();
    return cart.some(item => item.id === toolId);
}

function updateCartBadge() {
    const cart = getCart();
    const badges = document.querySelectorAll('#navCartCount, .cart-badge');
    badges.forEach(badge => {
        if (badge) {
            badge.textContent = cart.length;
            badge.style.display = cart.length > 0 ? 'inline-flex' : 'none';
        }
    });
}

// ============================================
// REVIEWS FUNCTIONS
// ============================================

function getReviewsForTool(toolId) {
    if (typeof reviewsDatabase === 'undefined') return [];
    return reviewsDatabase.filter(review => review.toolId === toolId);
}

function calculateAverageRating(toolId) {
    const reviews = getReviewsForTool(toolId);
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
}

function renderStars(rating, size = 'normal') {
    const fullStars = Math.floor(rating);
    const hasHalf = (rating % 1) >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    
    let html = '<span class="stars stars-' + size + '">';
    
    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
    }
    if (hasHalf) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
    }
    
    html += '</span>';
    return html;
}

function renderReviewsSection(toolId) {
    const reviews = getReviewsForTool(toolId);
    const avgRating = calculateAverageRating(toolId);
    
    if (reviews.length === 0) {
        return `
            <div class="reviews-empty">
                <i class="fas fa-comments"></i>
                <h3>No Reviews Yet</h3>
                <p>Be the first to review this tool!</p>
                <button class="btn-write-review" onclick="openReviewForm(${toolId})">
                    <i class="fas fa-edit"></i> Write a Review
                </button>
            </div>
        `;
    }
    
    let html = `
        <div class="reviews-summary">
            <div class="rating-overview">
                <div class="big-rating">${avgRating}</div>
                <div class="rating-stars">${renderStars(avgRating, 'large')}</div>
                <div class="rating-count">${reviews.length} review${reviews.length !== 1 ? 's' : ''}</div>
            </div>
            <div class="rating-breakdown">
                ${[5,4,3,2,1].map(stars => {
                    const count = reviews.filter(r => Math.floor(r.rating) === stars).length;
                    const percent = reviews.length > 0 ? (count / reviews.length * 100) : 0;
                    return `
                        <div class="rating-row">
                            <span>${stars} ★</span>
                            <div class="rating-bar">
                                <div class="rating-fill" style="width: ${percent}%"></div>
                            </div>
                            <span class="rating-num">${count}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <button class="btn-write-review" onclick="openReviewForm(${toolId})">
            <i class="fas fa-edit"></i> Write a Review
        </button>
        
        <div class="reviews-list">
            ${reviews.map(review => `
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                            <div>
                                <h4>${review.name} ${review.verified ? '<i class="fas fa-check-circle" style="color: #10b981;" title="Verified Purchase"></i>' : ''}</h4>
                                <p>${review.location} • ${formatDate(review.date)}</p>
                            </div>
                        </div>
                        <div class="review-rating">${renderStars(review.rating)}</div>
                    </div>
                    <h5 class="review-title">${review.title}</h5>
                    <p class="review-comment">${review.comment}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    return html;
}

function openReviewForm(toolId) {
    const tool = toolsDatabase.find(t => t.id === toolId);
    if (!tool) return;
    
    const formHTML = `
        <div class="review-form-modal" id="reviewFormModal">
            <div class="review-form-overlay" onclick="closeReviewForm()"></div>
            <div class="review-form-content">
                <button class="modal-close" onclick="closeReviewForm()">
                    <i class="fas fa-times"></i>
                </button>
                <h2>Write a Review</h2>
                <p>Share your experience with <strong>${tool.name}</strong></p>
                
                <form onsubmit="submitReview(event, ${toolId})">
                    <div class="form-group">
                        <label>Your Rating *</label>
                        <div class="star-rating-input" id="starRating">
                            ${[1,2,3,4,5].map(i => `
                                <i class="far fa-star" data-rating="${i}" onclick="setRating(${i})"></i>
                            `).join('')}
                        </div>
                        <input type="hidden" id="reviewRating" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Your Name *</label>
                        <input type="text" id="reviewName" required placeholder="Enter your name">
                    </div>
                    
                    <div class="form-group">
                        <label>Your City *</label>
                        <input type="text" id="reviewLocation" required placeholder="e.g., Mumbai">
                    </div>
                    
                    <div class="form-group">
                        <label>Review Title *</label>
                        <input type="text" id="reviewTitle" required placeholder="Brief title for your review">
                    </div>
                    
                    <div class="form-group">
                        <label>Your Review *</label>
                        <textarea id="reviewComment" required rows="5" placeholder="Share your detailed experience..."></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">
                        <i class="fab fa-whatsapp"></i> Submit Review via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', formHTML);
    document.body.style.overflow = 'hidden';
}

function setRating(rating) {
    document.getElementById('reviewRating').value = rating;
    const stars = document.querySelectorAll('#starRating i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('far');
            star.classList.add('fas');
            star.style.color = '#fbbf24';
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
            star.style.color = '#cbd5e1';
        }
    });
}

function closeReviewForm() {
    const modal = document.getElementById('reviewFormModal');
    if (modal) modal.remove();
    document.body.style.overflow = 'auto';
}

function submitReview(event, toolId) {
    event.preventDefault();
    
    const rating = document.getElementById('reviewRating').value;
    const name = document.getElementById('reviewName').value;
    const location = document.getElementById('reviewLocation').value;
    const title = document.getElementById('reviewTitle').value;
    const comment = document.getElementById('reviewComment').value;
    
    if (!rating) {
        alert('Please select a rating!');
        return;
    }
    
    const tool = toolsDatabase.find(t => t.id === toolId);
    const message = `⭐ *NEW REVIEW SUBMISSION*\n\n*Tool:* ${tool.name}\n*Rating:* ${'⭐'.repeat(rating)}\n*Name:* ${name}\n*Location:* ${location}\n*Title:* ${title}\n*Review:* ${comment}\n\n_Please verify and add to website._`;
    
    const whatsappUrl = `https://wa.me/${contactInfo.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    closeReviewForm();
    showNotification('✅ Review submitted! It will appear after verification.', 'success');
}

// ============================================
// UTILITIES
// ============================================

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

function showNotification(message, type = 'info') {
    const notif = document.createElement('div');
    notif.className = `notification notification-${type}`;
    notif.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Initialize cart badge on every page
window.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});