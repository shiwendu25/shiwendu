// ============================================
// SS TOOLS HUB - TOOLS DATABASE
// ============================================
// 📝 INSTRUCTIONS:
// 1. To ADD a tool: Copy a tool block and edit
// 2. To HIDE a tool: Change isActive: false
// 3. To DELETE a tool: Remove the entire block
// 4. After changes: Upload only THIS file to Netlify
// ============================================

const toolsDatabase = [

    // ============================================
    // TOOL 1: FILE MANAGEMENT DASHBOARD
    // ============================================
    {
        id: 1,
        name: "File Management Dashboard",
        category: "file",
        categoryName: "File Management",
        image: "images/file-management.png",
        icon: "fa-folder-tree",
        iconColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        ribbon: "⭐ BESTSELLER",
        ribbonClass: "ribbon-bestseller",
        description: "All-in-one solution: rename, import, search, bulk operations & duplicate finder.",
        fullDescription: "Complete file management solution with 6 powerful functions. Perfect for organizing thousands of files in seconds!",
        oldPrice: 2999,
        newPrice: 1099,
        rating: 4.9,
        reviews: 127,
        fileName: "file-management-dashboard.xlsm",
        isActive: true,
        features: [
            "Bulk Rename Tools (9 options)",
            "Smart File Search across PC",
            "Duplicate File Finder",
            "Recent Folders Quick Access",
            "Activity History Log",
            "Premium Glass 3D Design",
            "Live Progress Bar",
            "Smart Extension Detection",
            "Lifetime License",
            "Free Updates"
        ],
        screenshots: [],
        videoDemo: "" // YouTube embed URL (optional)
    },

    // ============================================
    // TOOL 2: SALES ANALYTICS PRO
    // ============================================
    {
        id: 2,
        name: "Sales Analytics Pro",
        category: "analytics",
        categoryName: "Analytics",
        image: "images/sales-analytics.png",
        icon: "fa-chart-line",
        iconColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        ribbon: "🆕 NEW",
        ribbonClass: "ribbon-new",
        description: "Real-time KPIs, interactive charts, forecasting & beautiful reports.",
        fullDescription: "Advanced sales analytics dashboard with real-time insights and beautiful visualizations.",
        oldPrice: 3499,
        newPrice: 1499,
        rating: 4.8,
        reviews: 89,
        fileName: "sales-analytics-pro.xlsm",
        isActive: true,
        features: [
            "Real-time KPI Dashboard",
            "Interactive Charts (10+ types)",
            "Auto Report Generation",
            "Sales Forecasting",
            "Customer Analytics",
            "Region-wise Analysis",
            "Product Performance",
            "Year-on-Year Comparison",
            "PDF Export",
            "Lifetime License"
        ],
        screenshots: [],
        videoDemo: ""
    },

    // ============================================
    // TOOL 3: DATA CLEANER SUITE
    // ============================================
    {
        id: 3,
        name: "Data Cleaner Suite",
        category: "data",
        categoryName: "Data Tools",
        image: "images/data-cleaner.png",
        icon: "fa-database",
        iconColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        ribbon: "🔥 HOT",
        ribbonClass: "ribbon-hot",
        description: "Clean messy data instantly! Remove duplicates, fix formats with one click.",
        fullDescription: "Professional data cleaning suite for all your messy Excel data needs.",
        oldPrice: 1999,
        newPrice: 799,
        rating: 4.9,
        reviews: 156,
        fileName: "data-cleaner-suite.xlsm",
        isActive: true,
        features: [
            "Remove Duplicates",
            "Fix Date Formats",
            "Standardize Text",
            "Trim Whitespace",
            "Validate Emails",
            "Phone Number Formatting",
            "Capitalize Names",
            "Remove Special Characters",
            "Bulk Operations",
            "Undo Support"
        ],
        screenshots: [],
        videoDemo: ""
    },

    // ========================================================
    // 📌 HOW TO ADD A NEW TOOL - COPY THIS TEMPLATE
    // ========================================================
    // Just remove the /* */ around this block and customize!
    
    /*
    {
        id: 4,                                    // ← Unique number
        name: "Your Tool Name",                   // ← Tool name
        category: "business",                     // ← file/data/business/email/analytics/hr
        categoryName: "Business",                 // ← Display category
        image: "images/your-tool.png",           // ← Image path (or "")
        icon: "fa-rocket",                       // ← FontAwesome icon
        iconColor: "linear-gradient(135deg, #color1, #color2)",
        ribbon: "🆕 NEW",                        // ← Or "" for none
        ribbonClass: "ribbon-new",               
        description: "Short 1-line description", 
        fullDescription: "Detailed description for modal",
        oldPrice: 1999,                          // ← Original price
        newPrice: 999,                           // ← Sale price
        rating: 5,                               // ← 1-5 stars
        reviews: 0,                              // ← Number of reviews
        fileName: "your-tool.xlsm",              // ← Actual file name
        isActive: true,                          // ← true=show, false=hide
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ],
        screenshots: [],
        videoDemo: ""
    },
    */

];

// ============================================
// CATEGORIES (Auto-generated from tools)
// ============================================
const categories = [
    { id: "all", name: "All Tools", icon: "🎯" },
    { id: "file", name: "File Management", icon: "📁" },
    { id: "data", name: "Data Tools", icon: "📊" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "email", name: "Email", icon: "📧" },
    { id: "analytics", name: "Analytics", icon: "📈" },
    { id: "hr", name: "HR Tools", icon: "👥" }
];

// ============================================
// REVIEWS DATABASE
// ============================================
// Add real customer reviews here
const reviewsDatabase = [
    {
        toolId: 1,
        name: "Rahul Sharma",
        location: "Mumbai",
        rating: 5,
        date: "2025-01-15",
        title: "Best Excel Tool I've Used!",
        comment: "This dashboard saved me 5+ hours every week! The bulk rename feature is amazing. Highly recommend!",
        verified: true
    },
    {
        toolId: 1,
        name: "Priya Kumari",
        location: "Delhi",
        rating: 5,
        date: "2025-01-10",
        title: "Worth Every Rupee",
        comment: "Beautiful design and works perfectly. Shiwendu provides excellent support!",
        verified: true
    },
    {
        toolId: 2,
        name: "Amit Mehta",
        location: "Bangalore",
        rating: 5,
        date: "2025-01-12",
        title: "Game Changer for Sales Team",
        comment: "Our entire team uses this now. The charts and KPIs are exactly what we needed.",
        verified: true
    },
    {
        toolId: 3,
        name: "Sneha Patel",
        location: "Pune",
        rating: 5,
        date: "2025-01-08",
        title: "Perfect Data Cleaner",
        comment: "Cleaned 10,000 rows of messy data in 30 seconds! Amazing tool!",
        verified: true
    }
];

// ============================================
// CONTACT INFO
// ============================================
const contactInfo = {
    name: "Shiwendu",
    phone: "919038338852",
    email: "shiwendu@zohomail.in"
};

// ============================================
// SITE SETTINGS
// ============================================
const siteSettings = {
    siteName: "SS Tools Hub",
    tagline: "Premium Excel VBA Tools",
    currency: "₹",
    upiId: "shiwendu@upi", // Your UPI ID
    bankName: "Your Bank Name",
    accountNumber: "XXXX1234",
    ifsc: "BANK0001234"
};
