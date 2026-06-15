// ============================================
// SS TOOLS HUB - MASTER DATA FILE
// Edit this to update everything!
// ============================================

// WHATSAPP NUMBER (Change here for all messages)
const WHATSAPP_NUMBER = "919038338852";

// CURRENT OFFER (Set to null to disable)
const CURRENT_OFFER = {
    enabled: true,
    title: "🔥 FLASH SALE - 50% OFF",
    description: "Limited time offer! Use code FLASH50",
    endDate: "2025-12-31T23:59:59", // YYYY-MM-DDTHH:MM:SS
    couponCode: "FLASH50",
    discountPercent: 50
};

// COUPON CODES
const COUPONS = {
    "WELCOME10": { discount: 10, type: "percent", description: "10% off for new customers" },
    "FLASH50": { discount: 50, type: "percent", description: "50% Flash Sale" },
    "BULK20": { discount: 20, type: "percent", description: "20% off on 2+ tools", minItems: 2 },
    "BUNDLE30": { discount: 30, type: "percent", description: "30% off on 3+ tools", minItems: 3 },
    "MEGA50": { discount: 5000, type: "fixed", description: "₹5000 off on orders above ₹15000", minAmount: 15000 }
};

// TOOLS DATA
const toolsData = [
    {
        id: 1,
        name: "File Management Dashboard",
        category: "File Management",
        description: "All-in-one solution for renaming, importing, searching files with bulk operations & duplicate finder.",
        longDescription: "Save 5+ hours every week with this powerful file management tool. Features include bulk rename, smart search, duplicate finder, and one-click file organization.",
        icon: "fas fa-folder-tree",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        image: null, // Add image URL when available
        oldPrice: 2999,
        newPrice: 999,
        rating: 5,
        reviews: 127,
        badge: "BESTSELLER",
        badgeIcon: "⭐",
        badgeColor: "default",
        features: ["6 Functions", "Bulk Operations", "Smart Search"],
        beforeAfter: {
            before: "8 hours of manual file management",
            after: "5 minutes with one click!"
        },
        popular: true,
        showOnHome: true,
        videoUrl: null // YouTube embed URL
    },
    {
        id: 2,
        name: "Sales Analytics Pro",
        category: "Analytics",
        description: "Advanced dashboard with real-time KPIs, interactive charts, forecasting & beautiful reports.",
        longDescription: "Transform your sales data into actionable insights with stunning visualizations and AI-powered forecasting.",
        icon: "fas fa-chart-line",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        image: null,
        oldPrice: 3499,
        newPrice: 1499,
        rating: 5,
        reviews: 89,
        badge: "NEW",
        badgeIcon: "🆕",
        badgeColor: "new",
        features: ["Real-time KPIs", "Charts", "Reports"],
        beforeAfter: {
            before: "Hours creating reports manually",
            after: "Instant dashboards & insights!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 3,
        name: "Data Cleaner Suite",
        category: "Data Tools",
        description: "Clean messy data instantly! Remove duplicates, fix formats, standardize entries with one click.",
        longDescription: "The ultimate data cleaning solution that handles duplicates, format errors, and standardization automatically.",
        icon: "fas fa-database",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        image: null,
        oldPrice: 1999,
        newPrice: 799,
        rating: 5,
        reviews: 156,
        badge: "HOT",
        badgeIcon: "🔥",
        badgeColor: "hot",
        features: ["Remove Dupes", "Fix Formats", "Validation"],
        beforeAfter: {
            before: "Days of manual data cleaning",
            after: "Clean data in seconds!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 4,
        name: "Email Automation Pro",
        category: "Email Tools",
        description: "Send personalized bulk emails from Excel with attachments, templates & tracking.",
        longDescription: "Send thousands of personalized emails with attachments, track opens, and manage campaigns from Excel.",
        icon: "fas fa-envelope-open-text",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        image: null,
        oldPrice: 2499,
        newPrice: 1199,
        rating: 5,
        reviews: 94,
        badge: null,
        features: ["Bulk Email", "Mail Merge", "Templates"],
        beforeAfter: {
            before: "Sending emails one by one",
            after: "1000+ emails in 1 click!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 5,
        name: "Invoice Generator",
        category: "Business",
        description: "Professional invoices with custom templates, GST calculations & PDF export.",
        longDescription: "Create stunning professional invoices with automatic GST calculations, custom branding, and instant PDF export.",
        icon: "fas fa-file-invoice",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        image: null,
        oldPrice: 1499,
        newPrice: 599,
        rating: 5,
        reviews: 203,
        badge: null,
        features: ["GST Calc", "PDF Export", "Templates"],
        beforeAfter: {
            before: "Manual invoice creation",
            after: "Professional invoices instantly!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 6,
        name: "Project Tracker Pro",
        category: "Business",
        description: "Gantt charts, task management, team collaboration & deadline tracking in Excel.",
        longDescription: "Complete project management solution with Gantt charts, team collaboration, deadline tracking, and progress reports.",
        icon: "fas fa-tasks",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        image: null,
        oldPrice: 2999,
        newPrice: 1299,
        rating: 5,
        reviews: 78,
        badge: null,
        features: ["Gantt Chart", "Tasks", "Reports"],
        beforeAfter: {
            before: "Multiple project tools",
            after: "All-in-one Excel solution!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    }
];

// CUSTOMER REVIEWS
const reviewsData = [
    {
        name: "Rahul Sharma",
        role: "Operations Manager",
        location: "Mumbai",
        rating: 5,
        text: "The File Management Dashboard saved me 5+ hours every week! Beautiful design and just works perfectly. Best investment ever!",
        toolBought: "File Management Dashboard",
        avatar: "RS",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
        verified: true,
        date: "2 weeks ago"
    },
    {
        name: "Priya Kumari",
        role: "Chartered Accountant",
        location: "Delhi",
        rating: 5,
        text: "Shiwendu is amazing! Custom tool built in 2 days, exactly what I needed. Support is top-notch. Highly recommended!",
        toolBought: "Invoice Generator",
        avatar: "PK",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
        verified: true,
        date: "1 month ago"
    },
    {
        name: "Amit Mehta",
        role: "CEO",
        location: "Bangalore",
        rating: 5,
        text: "Got the Pro plan and it's worth every rupee! All tools are professional quality. My team's productivity doubled!",
        toolBought: "Pro Plan",
        avatar: "AM",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
        verified: true,
        date: "3 weeks ago"
    },
    {
        name: "Sneha Reddy",
        role: "Data Analyst",
        location: "Hyderabad",
        rating: 5,
        text: "Data Cleaner Suite is a lifesaver! Cleaned 10,000 rows in seconds. The validation feature catches everything!",
        toolBought: "Data Cleaner Suite",
        avatar: "SR",
        gradient: "linear-gradient(135deg, #fa709a, #fee140)",
        verified: true,
        date: "1 week ago"
    },
    {
        name: "Vikram Singh",
        role: "Marketing Head",
        location: "Pune",
        rating: 5,
        text: "Email Automation Pro is incredible! Sent 5000 personalized emails in minutes. Templates are beautiful!",
        toolBought: "Email Automation Pro",
        avatar: "VS",
        gradient: "linear-gradient(135deg, #30cfd0, #330867)",
        verified: true,
        date: "2 months ago"
    },
    {
        name: "Anjali Gupta",
        role: "Project Manager",
        location: "Chennai",
        rating: 5,
        text: "Project Tracker Pro replaced our expensive software! Gantt charts are stunning. Worth every rupee!",
        toolBought: "Project Tracker Pro",
        avatar: "AG",
        gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
        verified: true,
        date: "3 weeks ago"
    }
];

// ============================================
// CART SYSTEM
// ============================================
function getCart() {
    return JSON.parse(localStorage.getItem('ssToolsCart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('ssToolsCart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) return;
    
    let cart = getCart();
    const existing = cart.find(item => item.id === toolId);
    
    if (existing) {
        showNotification('Already in cart!', 'info');
        return;
    }
    
    cart.push({
        id: tool.id,
        name: tool.name,
        price: tool.newPrice,
        oldPrice: tool.oldPrice,
        icon: tool.icon,
        gradient: tool.gradient,
        category: tool.category
    });
    
    saveCart(cart);
    showNotification(`✅ ${tool.name} added to cart!`, 'success');
    
    // Update button
    setTimeout(() => location.reload(), 800);
}

function removeFromCart(toolId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== toolId);
    saveCart(cart);
    showNotification('Removed from cart', 'info');
    if (window.location.pathname.includes('cart')) {
        renderCart();
    }
}

function clearCart() {
    if (!confirm('Remove all items from cart?')) return;
    localStorage.removeItem('ssToolsCart');
    updateCartBadge();
    if (window.location.pathname.includes('cart')) {
        renderCart();
    }
    showNotification('Cart cleared', 'info');
}

function updateCartBadge() {
    const cart = getCart();
    document.querySelectorAll('.nav-cart-badge').forEach(badge => {
        if (cart.length > 0) {
            badge.textContent = cart.length;
            badge.style.display = 'inline-flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

// ============================================
// COUPON SYSTEM
// ============================================
let appliedCoupon = null;

function applyCoupon() {
    const input = document.getElementById('couponInput');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    
    if (!code) {
        showNotification('Enter a coupon code', 'error');
        return;
    }
    
    const coupon = COUPONS[code];
    if (!coupon) {
        document.getElementById('couponMessage').innerHTML = 
            '<div class="coupon-error">❌ Invalid coupon code</div>';
        return;
    }
    
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    
    if (coupon.minItems && cart.length < coupon.minItems) {
        document.getElementById('couponMessage').innerHTML = 
            `<div class="coupon-error">❌ Need ${coupon.minItems}+ items for this coupon</div>`;
        return;
    }
    
    if (coupon.minAmount && subtotal < coupon.minAmount) {
        document.getElementById('couponMessage').innerHTML = 
            `<div class="coupon-error">❌ Min order ₹${coupon.minAmount} required</div>`;
        return;
    }
    
    appliedCoupon = { code, ...coupon };
    document.getElementById('couponMessage').innerHTML = 
        `<div class="coupon-success">✅ Coupon applied! ${coupon.description}</div>`;
    renderCart();
}

// ============================================
// CHECKOUT VIA WHATSAPP (AUTO MESSAGE)
// ============================================
function checkoutWhatsApp() {
    const cart = getCart();
    if (cart.length === 0) {
        showNotification('Cart is empty!', 'error');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let discount = 0;
    
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percent') {
            discount = Math.round(subtotal * appliedCoupon.discount / 100);
        } else {
            discount = appliedCoupon.discount;
        }
    }
    
    const total = subtotal - discount;
    
    // Generate beautiful WhatsApp message
    let message = `🛒 *NEW ORDER - SS Tools Hub* 🛒\n\n`;
    message += `Hi Shiwendu! I want to buy these tools:\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    
    cart.forEach((item, index) => {
        message += `\n*${index + 1}. ${item.name}*\n`;
        message += `   📁 Category: ${item.category}\n`;
        message += `   💰 Price: ₹${item.price.toLocaleString('en-IN')}\n`;
    });
    
    message += `\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📊 *Order Summary:*\n`;
    message += `Items: ${cart.length} tool(s)\n`;
    message += `Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;
    
    if (appliedCoupon) {
        message += `Coupon: ${appliedCoupon.code} (-₹${discount.toLocaleString('en-IN')})\n`;
    }
    
    message += `\n💵 *Total: ₹${total.toLocaleString('en-IN')}*\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📍 *My Details:*\n`;
    message += `Name: \nEmail: \nPhone: \n\n`;
    message += `Please share payment details. Thank you! 🙏`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Single product WhatsApp message
function buyNowWhatsApp(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) return;
    
    let message = `🛒 *Product Inquiry - SS Tools Hub*\n\n`;
    message += `Hi Shiwendu! I'm interested in:\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📦 *${tool.name}*\n`;
    message += `📁 Category: ${tool.category}\n`;
    message += `💰 Price: ~₹${tool.oldPrice.toLocaleString('en-IN')}~ → *₹${tool.newPrice.toLocaleString('en-IN')}*\n`;
    message += `⭐ Rating: ${tool.rating}/5 (${tool.reviews} reviews)\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `✨ *Features:*\n`;
    tool.features.forEach(f => {
        message += `✅ ${f}\n`;
    });
    message += `\nPlease share more details and payment options. Thank you! 🙏`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

// ============================================
// CREATE TOOL CARD
// ============================================
function createToolCard(tool) {
    const discount = Math.round(((tool.oldPrice - tool.newPrice) / tool.oldPrice) * 100);
    const popularClass = tool.popular ? 'popular' : '';
    
    let badgeHTML = '';
    if (tool.badge) {
        const badgeClass = tool.badgeColor === 'new' ? 'ribbon-new' : 
                          tool.badgeColor === 'hot' ? 'ribbon-hot' : '';
        badgeHTML = `<div class="tool-ribbon ${badgeClass}">${tool.badgeIcon} ${tool.badge}</div>`;
    }
    
    const featuresHTML = tool.features.map(f => 
        `<span><i class="fas fa-check"></i> ${f}</span>`
    ).join('');
    
    const stars = '⭐'.repeat(tool.rating);
    
    const cart = getCart();
    const inCart = cart.some(item => item.id === tool.id);
    const cartButtonText = inCart ? '<i class="fas fa-check"></i> In Cart' : '<i class="fas fa-cart-plus"></i> Add Cart';
    const cartButtonClass = inCart ? 'in-cart' : '';
    
    // Tool image - if image URL provided, use it, otherwise use icon
    const imageHTML = tool.image ? 
        `<img src="${tool.image}" alt="${tool.name}" style="width: 100%; height: 100%; object-fit: cover;">` :
        `<i class="${tool.icon}"></i>`;
    
    const beforeAfterHTML = tool.beforeAfter ? `
        <div class="before-after-mini">
            <div class="ba-row ba-before">❌ ${tool.beforeAfter.before}</div>
            <div class="ba-row ba-after">✅ ${tool.beforeAfter.after}</div>
        </div>
    ` : '';
    
    return `
        <div class="tool-card ${popularClass}" data-category="${tool.category}" data-name="${tool.name.toLowerCase()}">
            ${badgeHTML}
            <div class="discount-badge">${discount}% OFF</div>
            <div class="tool-image" style="background: ${tool.gradient};">
                ${imageHTML}
            </div>
            <div class="tool-content">
                <div class="tool-category">${tool.category}</div>
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
                
                ${beforeAfterHTML}
                
                <div class="tool-features">
                    ${featuresHTML}
                </div>
                
                <div class="tool-bottom">
                    <div class="tool-pricing">
                        <span class="price-old">₹${tool.oldPrice.toLocaleString('en-IN')}</span>
                        <span class="price-new">₹${tool.newPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div class="tool-rating">${stars} <span>(${tool.reviews})</span></div>
                </div>
                
                <div class="tool-actions">
                    <button onclick="addToCart(${tool.id})" class="btn-add-cart ${cartButtonClass}">
                        ${cartButtonText}
                    </button>
                    <button onclick="buyNowWhatsApp(${tool.id})" class="btn-buy-now">
                        <i class="fab fa-whatsapp"></i> Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// CREATE REVIEW CARD
// ============================================
function createReviewCard(review) {
    const stars = '⭐'.repeat(review.rating);
    const verifiedBadge = review.verified ? 
        '<span class="verified-badge"><i class="fas fa-check-circle"></i> Verified Buyer</span>' : '';
    
    return `
        <div class="review-card-enhanced">
            <div class="review-header-enhanced">
                <div class="reviewer-avatar-large" style="background: ${review.gradient};">
                    ${review.avatar}
                </div>
                <div class="reviewer-info-enhanced">
                    <h4>${review.name}</h4>
                    <p>${review.role} • ${review.location}</p>
                    ${verifiedBadge}
                </div>
                <div class="review-date">${review.date}</div>
            </div>
            <div class="review-stars-row">${stars}</div>
            <p class="review-text-enhanced">"${review.text}"</p>
            <div class="review-tool-bought">
                <i class="fas fa-shopping-bag"></i> Purchased: <strong>${review.toolBought}</strong>
            </div>
        </div>
    `;
}

// ============================================
// LOAD FUNCTIONS
// ============================================
function loadHomeTools() {
    const container = document.getElementById('homeToolsGrid');
    if (!container) return;
    const homeTools = toolsData.filter(t => t.showOnHome).slice(0, 6);
    container.innerHTML = homeTools.map(createToolCard).join('');
}

function loadAllTools() {
    const container = document.getElementById('toolsGrid');
    if (!container) return;
    container.innerHTML = toolsData.map(createToolCard).join('');
    updateResultsCount(toolsData.length);
}

function loadReviews() {
    const container = document.getElementById('reviewsGrid');
    if (!container) return;
    container.innerHTML = reviewsData.map(createReviewCard).join('');
}

function updateResultsCount(count) {
    const el = document.getElementById('resultsCount');
    if (el) el.textContent = count;
}

// ============================================
// SEARCH & FILTER
// ============================================
function filterTools() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const searchTerm = input.value.toLowerCase();
    const cards = document.querySelectorAll('#toolsGrid .tool-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const name = card.getAttribute('data-name') || '';
        const category = (card.getAttribute('data-category') || '').toLowerCase();
        if (name.includes(searchTerm) || category.includes(searchTerm)) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    updateResultsCount(visibleCount);
}

function filterCategory(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    
    const cards = document.querySelectorAll('#toolsGrid .tool-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    updateResultsCount(visibleCount);
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification-toast');
    if (existing) existing.remove();
    
    const notif = document.createElement('div');
    notif.className = `notification-toast notification-${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    
    notif.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('show'), 100);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ============================================
// DARK MODE
// ============================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    const icon = document.querySelector('.dark-mode-toggle i');
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function loadDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('.dark-mode-toggle i');
        if (icon) icon.className = 'fas fa-sun';
    }
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function startCountdown() {
    if (!CURRENT_OFFER || !CURRENT_OFFER.enabled) return;
    
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    
    const endTime = new Date(CURRENT_OFFER.endDate).getTime();
    
    function update() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            countdownEl.innerHTML = '⏰ Offer Expired';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownEl.innerHTML = `
            <div class="countdown-box"><span>${days}</span>Days</div>
            <div class="countdown-box"><span>${hours.toString().padStart(2,'0')}</span>Hours</div>
            <div class="countdown-box"><span>${minutes.toString().padStart(2,'0')}</span>Min</div>
            <div class="countdown-box"><span>${seconds.toString().padStart(2,'0')}</span>Sec</div>
        `;
    }
    
    update();
    setInterval(update, 1000);
}

// ============================================
// RECENT PURCHASE NOTIFICATIONS
// ============================================
const recentBuyers = [
    { name: "Rahul", city: "Mumbai", tool: "File Manager" },
    { name: "Priya", city: "Delhi", tool: "Sales Analytics" },
    { name: "Amit", city: "Bangalore", tool: "Data Cleaner" },
    { name: "Sneha", city: "Pune", tool: "Email Automation" },
    { name: "Vikram", city: "Chennai", tool: "Invoice Generator" }
];

function showRecentPurchase() {
    const buyer = recentBuyers[Math.floor(Math.random() * recentBuyers.length)];
    const popup = document.createElement('div');
    popup.className = 'recent-purchase-popup';
    popup.innerHTML = `
        <div class="recent-purchase-icon">🎉</div>
        <div class="recent-purchase-text">
            <strong>${buyer.name}</strong> from <strong>${buyer.city}</strong>
            <p>just bought ${buyer.tool}</p>
            <small>2 minutes ago • Verified</small>
        </div>
        <button onclick="this.parentElement.remove()" class="close-popup">×</button>
    `;
    document.body.appendChild(popup);
    
    setTimeout(() => popup.classList.add('show'), 100);
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 500);
    }, 5000);
}

// Show recent purchase every 30 seconds
function initRecentPurchases() {
    setTimeout(showRecentPurchase, 10000); // First after 10 seconds
    setInterval(showRecentPurchase, 30000); // Then every 30 seconds
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadDarkMode();
    loadHomeTools();
    loadAllTools();
    loadReviews();
    updateCartBadge();
    startCountdown();
    initRecentPurchases();
});
