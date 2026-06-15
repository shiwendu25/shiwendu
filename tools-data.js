// ============================================
// SS TOOLS HUB - MASTER DATA FILE
// Edit this to update everything!
// ============================================

// WHATSAPP NUMBER (Change here for all messages)
const WHATSAPP_NUMBER = "919038338852";

// CURRENT OFFER (Set to null to disable)
const CURRENT_OFFER = {
    enabled: true,
    title: "🔥 FLASH SALE - 20% OFF",
    description: "Limited time offer! Use code FLASH20",
    endDate: "2026-06-30T23:59:59",
    couponCode: "FLASH20",
    discountPercent: 20
};

// COUPON CODES
const COUPONS = {
    "WELCOME10": { discount: 10, type: "percent", description: "10% off for new customers" },
    "FLASH20": { discount: 20, type: "percent", description: "20% Flash Sale" },
    "BULK25": { discount: 25, type: "percent", description: "25% off on 2+ tools", minItems: 2 },
};

// ============================================
// TOOLS DATA - Professional Descriptions
// ============================================
const toolsData = [
    {
        id: 1,
        name: "File Management Dashboard",
        category: "File Management",
        description: "Powerful all-in-one Excel solution for bulk file operations, smart search, and intelligent duplicate detection.",
        longDescription: "Transform your file management workflow with this professional Excel VBA tool. Features include bulk file renaming with custom patterns, advanced search across multiple folders, automatic duplicate detection with smart comparison, one-click file organization by type/date/size, and detailed file reporting. Save 5+ hours every week and eliminate manual file handling errors.",
        icon: "fas fa-folder-tree",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        image: null,
        oldPrice: 2999,
        newPrice: 1099,
        rating: 5,
        reviews: 127,
        badge: "BESTSELLER",
        badgeIcon: "⭐",
        badgeColor: "default",
        features: ["6 Functions", "Bulk Operations", "Smart Search"],
        beforeAfter: {
            before: "8 hours of manual file management daily",
            after: "Complete in 5 minutes with one click!"
        },
        popular: true,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 2,
        name: "Depreciation Tool - Tally Prime Compatible",
        category: "Accounting & Finance",
        description: "Professional depreciation calculation tool fully compatible with Tally Prime, ensuring accurate fixed asset management.",
        longDescription: "Streamline your depreciation calculations with this advanced VBA tool designed for accountants and finance professionals. Supports both SLM and WDV methods, complies with Companies Act 2013 and Income Tax Act, generates Tally Prime ready reports, automated journal entries, asset register maintenance, and comprehensive depreciation schedules. Perfect for businesses managing multiple fixed assets.",
        icon: "fas fa-calculator",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        image: null,
        oldPrice: 8599,
        newPrice: 5499,
        rating: 5,
        reviews: 89,
        badge: "NEW",
        badgeIcon: "🆕",
        badgeColor: "new",
        features: ["Tally Compatible", "SLM & WDV", "Auto Reports"],
        beforeAfter: {
            before: "Hours of manual depreciation calculations",
            after: "Instant accurate calculations with Tally export!"
        },
        popular: false,
        showOnHome: true,
        hidden : true ,
        videoUrl: null
    },
    {
        id: 3,
        name: "Excel Merge Master",
        category: "Data Tools",
        description: "Merge multiple Excel workbooks or worksheets into one consolidated file with intelligent formatting preservation.",
        longDescription: "The ultimate Excel merging solution for accountants, analysts, and data professionals. Combine multiple workbooks into one, merge worksheets within the same workbook, preserve all formatting and formulas, handle different headers intelligently, auto-detect data ranges, and create master consolidated reports. Save hours of manual copy-paste work.",
        icon: "fas fa-object-group",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        image: null,
        oldPrice: 999,
        newPrice: 299,
        rating: 5,
        reviews: 156,
        badge: "HOT",
        badgeIcon: "🔥",
        badgeColor: "hot",
        features: ["Multi-File Merge", "Header Detection", "Format Preserved"],
        beforeAfter: {
            before: "Hours copying and pasting between files",
            after: "Merge unlimited files in seconds!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 4,
        name: "Email Automation & Task Manager",
        category: "Email Tools",
        description: "Automated email system with due date reminders, task tracking, and bulk personalized email sending via Outlook.",
        longDescription: "Revolutionize your email and task management with this powerful Excel automation tool. Features automated email reminders based on due dates, bulk personalized email sending through Outlook, task progress tracking, automatic follow-ups, customizable email templates, attachment support, and comprehensive reporting. Perfect for project managers, sales teams, and HR professionals.",
        icon: "fas fa-envelope-open-text",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        image: null,
        oldPrice: 2499,
        newPrice: 1199,
        rating: 5,
        reviews: 94,
        badge: null,
        features: ["Bulk Email", "Due Date Alerts", "Auto Follow-up"],
        beforeAfter: {
            before: "Sending emails one-by-one and tracking manually",
            after: "1000+ emails with auto-tracking in 1 click!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 5,
        name: "Invoice Generator Pro",
        category: "Business",
        description: "Professional GST-compliant invoice generator with custom templates, automatic calculations, and PDF export.",
        longDescription: "Create stunning professional invoices in seconds with this comprehensive invoicing solution. Features include GST calculations (CGST, SGST, IGST), multiple invoice templates, custom branding with logo, automatic invoice numbering, customer database, payment tracking, instant PDF export, and bulk invoice generation. Fully compliant with Indian GST regulations.",
        icon: "fas fa-file-invoice",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        image: null,
        oldPrice: 1499,
        newPrice: 599,
        rating: 5,
        reviews: 203,
        badge: null,
        features: ["GST Compliant", "PDF Export", "Custom Templates"],
        beforeAfter: {
            before: "30 minutes per invoice manually",
            after: "Professional invoice in 30 seconds!"
        },
        popular: false,
        showOnHome: false,
        videoUrl: null
    },
    {
        id: 6,
        name: "GST Reconciliation Tool",
        category: "GST & Taxation",
        description: "Complete GST reconciliation between GSTR-2B, GSTR-3B and Purchase Register with mismatch detection.",
        longDescription: "Professional GST reconciliation tool for accountants and CAs. Automatically matches GSTR-2B with your Purchase Register, identifies mismatches, missing invoices, and rate differences. Generates detailed reconciliation reports, ITC eligible vs ineligible analysis, vendor-wise GST summary, and helps in accurate GSTR-3B filing. Saves days of manual reconciliation work.",
        icon: "fas fa-file-invoice-dollar",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        image: null,
        oldPrice: 8999,
        newPrice: 5599,
        rating: 5,
        reviews: 78,
        badge: "HOT",
        badgeIcon: "🔥",
        badgeColor: "hot",
        features: ["GSTR-2B Match", "Auto Reports", "Mismatch Detection"],
        beforeAfter: {
            before: "Days of manual GST reconciliation",
            after: "Complete reconciliation in minutes!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 7,
        name: "Vendor Reconciliation Master",
        category: "Accounting & Finance",
        description: "Automated vendor ledger reconciliation tool that matches your books with vendor statements instantly.",
        longDescription: "Streamline your vendor reconciliation process with this intelligent matching tool. Automatically compares your purchase register with vendor ledger statements, identifies discrepancies, missing entries, and amount mismatches. Generates professional reconciliation statements, aging analysis, dispute reports, and helps maintain healthy vendor relationships. Essential tool for accounts payable teams.",
        icon: "fas fa-handshake",
        gradient: "linear-gradient(135deg, #fcb045 0%, #fd1d1d 100%)",
        image: null,
        oldPrice: 2499,
        newPrice: 1599,
        rating: 5,
        reviews: 67,
        badge: "NEW",
        badgeIcon: "🆕",
        badgeColor: "new",
        features: ["Auto Matching", "Aging Analysis", "Dispute Reports"],
        beforeAfter: {
            before: "Days reconciling vendor accounts manually",
            after: "Complete vendor reconciliation in minutes!"
        },
        popular: false,
        showOnHome: true,
        videoUrl: null
    },
    {
        id: 8,
        name: "Custom Tool Development",
        category: "Custom Solutions",
        description: "Need a specific Excel VBA tool for your business? Get a custom-built professional solution tailored to your needs.",
        longDescription: "Get a fully customized Excel VBA tool designed specifically for your business requirements. Includes detailed requirement analysis, professional development by experienced VBA expert, multiple revisions, comprehensive testing, documentation, training, and 6 months free support. Perfect for unique business processes that off-the-shelf tools cannot solve. Delivery in 7-15 days.",
        icon: "fas fa-magic",
        gradient: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
        image: null,
        oldPrice: 9999,
        newPrice: 6999,
        rating: 5,
        reviews: 45,
        badge: "CUSTOM",
        badgeIcon: "✨",
        badgeColor: "default",
        features: ["Tailored Solution", "6 Months Support", "Free Revisions"],
        beforeAfter: {
            before: "Struggling with existing tools that don't fit",
            after: "Perfect custom tool for YOUR business!"
        },
        popular: true,
        showOnHome: true,
        videoUrl: null
    }
];

// ============================================
// SERVICES DATA - NEW! (Taxation, Accounting, Finance)
// ============================================
const servicesData = [
    {
        id: 101,
        name: "GST Return Filing",
        category: "GST Services",
        description: "Professional GST return filing services - GSTR-1, GSTR-3B, GSTR-9, GSTR-9C by qualified experts.",
        longDescription: "Complete GST compliance services including monthly/quarterly return filing (GSTR-1, GSTR-3B), annual returns (GSTR-9, GSTR-9C), GST registration, amendments, refund applications, and notice handling. All filings done by experienced Chartered Accountants ensuring 100% accuracy and timely submission.",
        icon: "fas fa-file-invoice-dollar",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        oldPrice: 2500,
        newPrice: 1500,
        priceLabel: "/month",
        features: ["GSTR-1 & 3B", "Annual Returns", "Expert Filing"],
        popular: true,
        type: "service"
    },
    {
        id: 102,
        name: "TDS Return Filing",
        category: "TDS Services",
        description: "Complete TDS return filing services - Form 24Q, 26Q, 27Q with TDS certificate generation.",
        longDescription: "Professional TDS compliance services including quarterly TDS returns (Form 24Q, 26Q, 27Q), TDS payment, certificate generation (Form 16, 16A), correction returns, and TDS reconciliation. Handled by experienced tax professionals ensuring compliance with latest Income Tax provisions.",
        icon: "fas fa-receipt",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        oldPrice: 3000,
        newPrice: 2499,
        priceLabel: "/quarter",
        features: ["All TDS Forms", "Form 16/16A", "Quick Filing"],
        popular: false,
        type: "service"
    },
    {
        id: 103,
        name: "Income Tax Return Filing",
        category: "Income Tax",
        description: "ITR filing for salaried, business, and professional individuals by qualified Chartered Accountants.",
        longDescription: "Expert Income Tax Return filing services for individuals, businesses, and professionals. Covers all ITR forms (ITR-1 to ITR-7), tax planning, deduction optimization, capital gains computation, foreign income reporting, and notice response. Maximum refund guaranteed with expert review.",
        icon: "fas fa-file-alt",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        oldPrice: 8500,
        newPrice: 6499,
        priceLabel: "/year",
        features: ["All ITR Forms", "Tax Planning", "Maximum Refund"],
        popular: true,
        type: "service"
    },
    {
        id: 104,
        name: "PF Withdrawal Assistance",
        category: "PF ",
        description: "Complete EPF withdrawal and transfer services - Form 19, Form 10C, Form 31 with quick processing.",
        longDescription: "End-to-end PF withdrawal assistance including final settlement (Form 19), pension withdrawal (Form 10C), partial withdrawal (Form 31), PF transfer, KYC updates, UAN activation, and grievance handling. Our experts ensure quick processing and resolve any PFO issues.",
        icon: "fas fa-piggy-bank",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        oldPrice: 999,
        newPrice: 700,
        priceLabel: "/service",
        features: ["All PF Forms", "KYC Update", "Quick Processing"],
        popular: false,
        type: "service"
    },
    {
        id: 105,
        name: "Gst Registration",
        category: "Registration",
        description: "GST REGISTRATION.",
        longDescription: "Comprehensive Gst registration services including ,PAN, TAN,and,post-incorporation compliance support.",
        icon: "fas fa-building",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        oldPrice: 9999,
        newPrice: 7999,
        priceLabel: "/registration",
        features: ["All Company Types", "Complete Docs", "Bank Account"],
        popular: true,
        type: "service"
    },
    {
        id: 106,
        name: "Accounting & Bookkeeping",
        category: "Accounting",
        description: "Monthly accounting and bookkeeping services in Tally Prime.",
        longDescription: "Professional accounting services including daily bookkeeping, ledger maintenance, bank reconciliation, monthly financial statements, MIS reports, accounts receivable/payable management, inventory accounting, and year-end finalization. Compatible with Tally Prime, Zoho Books, QuickBooks.",
        icon: "fas fa-book",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        oldPrice: 7000,
        newPrice: 4999,
        priceLabel: "/month",
        features: ["Tally", "MIS Reports", "Bank Reconciliation"],
        popular: false,
        type: "service"
    },
    {
        id: 108,
        name: "Tax Audit & Statutory Audit",
        category: "Audit Services",
        description: "Professional tax audit (44AB) and statutory audit services by qualified Chartered Accountants.",
        longDescription: "Complete audit services including Tax Audit under section 44AB, Statutory Audit under Companies Act, Internal Audit, Stock Audit, and Concurrent Audit. Conducted by experienced Chartered Accountants ensuring compliance, identifying risks, and providing valuable business insights.",
        icon: "fas fa-search-dollar",
        gradient: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
        oldPrice: 15000,
        newPrice: 9999,
        priceLabel: "/audit",
        features: ["Tax & Statutory", "CA Certified", "Risk Analysis"],
        popular: false,
        type: "service"
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
        toolBought: "Custom Tool Development",
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
        text: "GST Reconciliation tool is fantastic! Saved my CA team weeks of work. The accuracy is incredible!",
        toolBought: "GST Reconciliation",
        avatar: "AM",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
        verified: true,
        date: "3 weeks ago"
    },
    {
        name: "Sneha Reddy",
        role: "Chartered Accountant",
        location: "Hyderabad",
        rating: 5,
        text: "Got my GST returns filed quickly and professionally. Their service is reliable and affordable!",
        toolBought: "GST Return Filing Service",
        avatar: "SR",
        gradient: "linear-gradient(135deg, #fa709a, #fee140)",
        verified: true,
        date: "1 week ago"
    },
    {
        name: "Vikram Singh",
        role: "Business Owner",
        location: "Pune",
        rating: 5,
        text: "Vendor reconciliation tool is a game changer! What used to take days now takes minutes.",
        toolBought: "Vendor Reconciliation",
        avatar: "VS",
        gradient: "linear-gradient(135deg, #30cfd0, #330867)",
        verified: true,
        date: "2 months ago"
    },
    {
        name: "Anjali Gupta",
        role: "Finance Manager",
        location: "Chennai",
        rating: 5,
        text: "Depreciation tool with Tally integration is exactly what I needed! Highly professional work by Shiwendu.",
        toolBought: "Depreciation Tool",
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
    const tool = toolsData.find(t => t.id === toolId) || servicesData.find(t => t.id === toolId);
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
// CHECKOUT VIA WHATSAPP
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
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

function buyNowWhatsApp(toolId) {
    const tool = toolsData.find(t => t.id === toolId) || servicesData.find(t => t.id === toolId);
    if (!tool) return;
    
    let message = `🛒 *Product Inquiry - SS Tools Hub*\n\n`;
    message += `Hi Shiwendu! I'm interested in:\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📦 *${tool.name}*\n`;
    message += `📁 Category: ${tool.category}\n`;
    message += `💰 Price: ~₹${tool.oldPrice.toLocaleString('en-IN')}~ → *₹${tool.newPrice.toLocaleString('en-IN')}*\n`;
    if (tool.rating) {
        message += `⭐ Rating: ${tool.rating}/5 (${tool.reviews} reviews)\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `✨ *Features:*\n`;
    tool.features.forEach(f => {
        message += `✅ ${f}\n`;
    });
    message += `\nPlease share more details and payment options. Thank you! 🙏`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

// Service inquiry WhatsApp message
function inquireService(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (!service) return;
    
    let message = `📋 *Service Inquiry - SS Tools Hub*\n\n`;
    message += `Hi Shiwendu! I need this service:\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🎯 *${service.name}*\n`;
    message += `📁 Category: ${service.category}\n`;
    message += `💰 Starting from: *₹${service.newPrice.toLocaleString('en-IN')}*${service.priceLabel || ''}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `✨ *Service Includes:*\n`;
    service.features.forEach(f => {
        message += `✅ ${f}\n`;
    });
    message += `\n📝 *About this service:*\n${service.description}\n\n`;
    message += `Please share complete details, requirements & timeline. Thank you! 🙏`;
    
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
// CREATE SERVICE CARD (NEW!)
// ============================================
function createServiceCard(service) {
    const discount = Math.round(((service.oldPrice - service.newPrice) / service.oldPrice) * 100);
    const popularClass = service.popular ? 'popular' : '';
    
    const featuresHTML = service.features.map(f => 
        `<span><i class="fas fa-check"></i> ${f}</span>`
    ).join('');
    
    return `
        <div class="tool-card service-card ${popularClass}" data-category="${service.category}" data-name="${service.name.toLowerCase()}">
            ${service.popular ? '<div class="tool-ribbon">⭐ POPULAR</div>' : ''}
            <div class="discount-badge">${discount}% OFF</div>
            <div class="tool-image" style="background: ${service.gradient};">
                <i class="${service.icon}"></i>
            </div>
            <div class="tool-content">
                <div class="tool-category">${service.category}</div>
                <h3 class="tool-name">${service.name}</h3>
                <p class="tool-description">${service.description}</p>
                
                <div class="tool-features">
                    ${featuresHTML}
                </div>
                
                <div class="tool-bottom">
                    <div class="tool-pricing">
                        <span class="price-old">₹${service.oldPrice.toLocaleString('en-IN')}</span>
                        <span class="price-new">₹${service.newPrice.toLocaleString('en-IN')}<small style="font-size:14px;color:#718096;">${service.priceLabel || ''}</small></span>
                    </div>
                    <div class="service-badge-cert">
                        <i class="fas fa-certificate"></i> CA Certified
                    </div>
                </div>
                
                <div class="tool-actions">
                    <button onclick="inquireService(${service.id})" class="btn-buy-now" style="grid-column: 1 / -1;">
                        <i class="fab fa-whatsapp"></i> Get This Service
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

function loadAllServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;
    container.innerHTML = servicesData.map(createServiceCard).join('');
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
    { name: "Priya", city: "Delhi", tool: "GST Return Filing" },
    { name: "Amit", city: "Bangalore", tool: "Vendor Reconciliation" },
    { name: "Sneha", city: "Pune", tool: "ITR Filing Service" },
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

function initRecentPurchases() {
    setTimeout(showRecentPurchase, 10000);
    setInterval(showRecentPurchase, 30000);
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadDarkMode();
    loadHomeTools();
    loadAllTools();
    loadAllServices();
    loadReviews();
    updateCartBadge();
    startCountdown();
});
