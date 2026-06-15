// ============================================
// SS TOOLS HUB - MASTER TOOLS DATA
// Edit this file to update ALL tools everywhere!
// ============================================

const toolsData = [
    {
        id: 1,
        name: "File Management Dashboard",
        category: "File Management",
        description: "All-in-one solution for renaming, importing, searching files with bulk operations & duplicate finder.",
        icon: "fas fa-folder-tree",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        oldPrice: 2999,
        newPrice: 1099,
        rating: 5,
        reviews: 127,
        badge: "BESTSELLER",
        badgeIcon: "⭐",
        badgeColor: "default",
        features: ["6 Functions", "Bulk Operations", "Smart Search"],
        popular: true,
        showOnHome: true
    },
    {
        id: 2,
        name: "Sales Analytics Pro",
        category: "Analytics",
        description: "Advanced dashboard with real-time KPIs, interactive charts, forecasting & beautiful reports.",
        icon: "fas fa-chart-line",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        oldPrice: 3499,
        newPrice: 1499,
        rating: 5,
        reviews: 89,
        badge: "NEW",
        badgeIcon: "🆕",
        badgeColor: "new",
        features: ["Real-time KPIs", "Charts", "Reports"],
        popular: false,
        showOnHome: true
    },
    {
        id: 3,
        name: "Data Cleaner Suite",
        category: "Data Tools",
        description: "Clean messy data instantly! Remove duplicates, fix formats, standardize entries with one click.",
        icon: "fas fa-database",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        oldPrice: 1999,
        newPrice: 799,
        rating: 5,
        reviews: 156,
        badge: "HOT",
        badgeIcon: "🔥",
        badgeColor: "hot",
        features: ["Remove Dupes", "Fix Formats", "Validation"],
        popular: false,
        showOnHome: true
    },
    {
        id: 4,
        name: "Email Automation Pro",
        category: "Email Tools",
        description: "Send personalized bulk emails from Excel with attachments, templates & tracking.",
        icon: "fas fa-envelope-open-text",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        oldPrice: 2499,
        newPrice: 1199,
        rating: 5,
        reviews: 94,
        badge: null,
        features: ["Bulk Email", "Mail Merge", "Templates"],
        popular: false,
        showOnHome: true
    },
    {
        id: 5,
        name: "Invoice Generator",
        category: "Business",
        description: "Professional invoices with custom templates, GST calculations & PDF export.",
        icon: "fas fa-file-invoice",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        oldPrice: 1499,
        newPrice: 599,
        rating: 5,
        reviews: 203,
        badge: null,
        features: ["GST Calc", "PDF Export", "Templates"],
        popular: false,
        showOnHome: true
    },
    {
        id: 6,
        name: "Project Tracker Pro",
        category: "Business",
        description: "Gantt charts, task management, team collaboration & deadline tracking in Excel.",
        icon: "fas fa-tasks",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        oldPrice: 2999,
        newPrice: 1299,
        rating: 5,
        reviews: 78,
        badge: null,
        features: ["Gantt Chart", "Tasks", "Reports"],
        popular: false,
        showOnHome: true
    }
    // ADD MORE TOOLS HERE - Just copy the pattern above!
];

// Function to generate tool card HTML
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
    
    const whatsappMessage = encodeURIComponent(
        `Hi Shiwendu, I want to buy ${tool.name} (₹${tool.newPrice})`
    );
    
    return `
        <div class="tool-card ${popularClass}" data-category="${tool.category}" data-name="${tool.name.toLowerCase()}">
            ${badgeHTML}
            <div class="discount-badge">${discount}% OFF</div>
            <div class="tool-image" style="background: ${tool.gradient};">
                <i class="${tool.icon}"></i>
            </div>
            <div class="tool-content">
                <div class="tool-category">${tool.category}</div>
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
                
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
                
                <a href="https://wa.me/919038338852?text=${whatsappMessage}" class="btn-buy">
                    <i class="fas fa-shopping-cart"></i> Buy Now via WhatsApp
                </a>
            </div>
        </div>
    `;
}

// Load tools on HOME page (only featured ones - first 6)
function loadHomeTools() {
    const container = document.getElementById('homeToolsGrid');
    if (!container) return;
    
    const homeTools = toolsData.filter(t => t.showOnHome).slice(0, 6);
    container.innerHTML = homeTools.map(createToolCard).join('');
}

// Load tools on TOOLS page (all tools)
function loadAllTools() {
    const container = document.getElementById('toolsGrid');
    if (!container) return;
    
    container.innerHTML = toolsData.map(createToolCard).join('');
    updateResultsCount(toolsData.length);
}

// Update results count
function updateResultsCount(count) {
    const el = document.getElementById('resultsCount');
    if (el) el.textContent = count;
}

// Search filter
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

// Category filter
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

// Auto-load on page ready
document.addEventListener('DOMContentLoaded', function() {
    loadHomeTools();
    loadAllTools();
});
