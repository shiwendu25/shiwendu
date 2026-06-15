// ============================================
// BLOG ARTICLES DATA
// Add more articles by copying the pattern!
// ============================================

const blogArticles = [
    {
        id: 1,
        title: "10 Excel Tips Every Accountant Should Know in 2025",
        excerpt: "Discover powerful Excel techniques that will transform how you work with financial data and save hours every week.",
        category: "Excel Tips",
        author: "Shiwendu",
        date: "2025-01-15",
        readTime: "5 min read",
        icon: "fas fa-lightbulb",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        featured: true,
        content: `
            <h2>Introduction</h2>
            <p>Excel is the backbone of accounting and finance. Whether you're managing GST, preparing reports, or analyzing data, these tips will make you more productive.</p>
            
            <h2>1. Use Pivot Tables for Quick Analysis</h2>
            <p>Pivot tables are your best friend for summarizing large datasets. Select your data, go to Insert → Pivot Table, and start analyzing!</p>
            
            <h2>2. Master VLOOKUP and XLOOKUP</h2>
            <p>VLOOKUP and the newer XLOOKUP help you find data across sheets instantly. Save hours of manual searching!</p>
            
            <h2>3. Conditional Formatting for Insights</h2>
            <p>Highlight important data automatically using conditional formatting. Identify trends, outliers, and patterns at a glance.</p>
            
            <h2>4. Power Query for Data Cleaning</h2>
            <p>Power Query revolutionizes data cleaning. Clean messy data in minutes instead of hours.</p>
            
            <h2>5. Keyboard Shortcuts</h2>
            <p>Learn essential shortcuts: Ctrl+T (Table), Ctrl+Shift+L (Filter), F4 (Repeat last action), Alt+= (AutoSum).</p>
            
            <h2>6. Use Named Ranges</h2>
            <p>Make formulas easier to read by using named ranges instead of cell references.</p>
            
            <h2>7. Data Validation</h2>
            <p>Prevent errors by adding data validation to ensure only valid entries are made.</p>
            
            <h2>8. SUMIFS and COUNTIFS</h2>
            <p>These powerful functions help you sum or count based on multiple criteria.</p>
            
            <h2>9. Slicers for Interactive Reports</h2>
            <p>Make your reports interactive with slicers. Filter data with a single click!</p>
            
            <h2>10. Automate with VBA</h2>
            <p>Once you've mastered the basics, VBA macros can automate repetitive tasks completely. <strong>Need a custom tool? <a href="tools.html">Browse our premium tools</a> or <a href="https://wa.me/919038338852">contact us</a>!</strong></p>
            
            <h2>Conclusion</h2>
            <p>Mastering these Excel skills will make you 10x more productive. Want done-for-you solutions? <a href="tools.html">Check our Premium Excel Tools</a>!</p>
        `
    },
    {
        id: 2,
        title: "How to Reconcile GST in 5 Minutes (Step-by-Step Guide)",
        excerpt: "Learn the fastest way to reconcile GSTR-2B with your purchase register using Excel automation tools.",
        category: "GST & Tax",
        author: "Shiwendu",
        date: "2025-01-10",
        readTime: "7 min read",
        icon: "fas fa-file-invoice-dollar",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        featured: false,
        content: `
            <h2>Why GST Reconciliation Matters</h2>
            <p>GST reconciliation is crucial for claiming accurate ITC. Manual reconciliation can take days, but with the right approach, you can do it in minutes.</p>
            
            <h2>What You Need</h2>
            <ul>
                <li>GSTR-2B downloaded from GST portal</li>
                <li>Your purchase register</li>
                <li>Excel</li>
                <li>Our <a href="tools.html">GST Reconciliation Tool</a> (Optional but recommended)</li>
            </ul>
            
            <h2>Step-by-Step Process</h2>
            
            <h3>Step 1: Download GSTR-2B</h3>
            <p>Login to GST portal → Returns Dashboard → Select period → Download GSTR-2B JSON/Excel</p>
            
            <h3>Step 2: Prepare Purchase Register</h3>
            <p>Ensure your purchase register has: GSTIN, Invoice Number, Date, Taxable Value, CGST, SGST, IGST</p>
            
            <h3>Step 3: Match Invoices</h3>
            <p>Use VLOOKUP or our automated tool to match invoices between GSTR-2B and your register.</p>
            
            <h3>Step 4: Identify Mismatches</h3>
            <p>Look for:</p>
            <ul>
                <li>Missing invoices in GSTR-2B</li>
                <li>Amount mismatches</li>
                <li>Rate differences</li>
                <li>GSTIN errors</li>
            </ul>
            
            <h3>Step 5: Take Action</h3>
            <p>Contact vendors for missing invoices, correct your records for amount mismatches.</p>
            
            <h2>Pro Tip: Use Automation</h2>
            <p>Our <strong><a href="tools.html">GST Reconciliation Tool</a> (₹1,299)</strong> automates all 5 steps in just 1 click! Save hours of work and ensure 100% accuracy.</p>
        `
    },
    {
        id: 3,
        title: "Excel VBA for Beginners: Complete Guide",
        excerpt: "Start your VBA journey with this comprehensive beginner's guide. Learn the basics and build your first macro.",
        category: "VBA Tutorial",
        author: "Shiwendu",
        date: "2025-01-08",
        readTime: "10 min read",
        icon: "fas fa-code",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        featured: false,
        content: `
            <h2>What is VBA?</h2>
            <p>VBA (Visual Basic for Applications) is Excel's built-in programming language. It allows you to automate repetitive tasks and create powerful tools.</p>
            
            <h2>Why Learn VBA?</h2>
            <ul>
                <li>Automate hours of work in seconds</li>
                <li>Create custom solutions</li>
                <li>Build interactive forms</li>
                <li>Process large datasets</li>
                <li>Generate professional reports</li>
            </ul>
            
            <h2>Getting Started</h2>
            
            <h3>1. Enable Developer Tab</h3>
            <p>File → Options → Customize Ribbon → Check "Developer"</p>
            
            <h3>2. Open VBA Editor</h3>
            <p>Press Alt + F11 to open the VBA Editor</p>
            
            <h3>3. Your First Macro</h3>
            <pre style="background:#f1f5f9; padding:16px; border-radius:8px;"><code>Sub HelloWorld()
    MsgBox "Hello, World!"
End Sub</code></pre>
            
            <h2>Common VBA Tasks</h2>
            <p>VBA can help you with:</p>
            <ul>
                <li>Looping through rows/columns</li>
                <li>Reading/writing data</li>
                <li>File operations</li>
                <li>Email automation</li>
                <li>PDF generation</li>
            </ul>
            
            <h2>Want Ready-Made Solutions?</h2>
            <p>Don't have time to learn VBA? Get our <a href="tools.html">premium pre-built tools</a> starting at just ₹299! All tools come with lifetime updates and support.</p>
        `
    },
    {
        id: 4,
        title: "5 Ways Excel Automation Saves 10+ Hours Every Week",
        excerpt: "Discover real-world examples of how Excel automation transforms business productivity and saves countless hours.",
        category: "Automation",
        author: "Shiwendu",
        date: "2025-01-05",
        readTime: "6 min read",
        icon: "fas fa-bolt",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        featured: false,
        content: `
            <h2>The Power of Automation</h2>
            <p>Most professionals spend 60% of their time on repetitive tasks. Excel automation can eliminate this waste and free you up for strategic work.</p>
            
            <h2>5 Game-Changing Automations</h2>
            
            <h3>1. Automated Data Entry</h3>
            <p>Stop manual data entry. Use macros to import from multiple sources, validate, and format automatically. <strong>Time saved: 5 hours/week</strong></p>
            
            <h3>2. One-Click Reports</h3>
            <p>Generate monthly/weekly reports with a single button click. Beautiful charts, formatted tables, and PDF export. <strong>Time saved: 3 hours/week</strong></p>
            
            <h3>3. Email Automation</h3>
            <p>Send personalized emails to hundreds of customers with attachments, all from Excel. <strong>Time saved: 2 hours/week</strong></p>
            
            <h3>4. File Management</h3>
            <p>Rename hundreds of files, organize folders, find duplicates in seconds. <strong>Time saved: 1 hour/week</strong></p>
            
            <h3>5. GST Reconciliation</h3>
            <p>Reconcile GST returns automatically, identify mismatches instantly. <strong>Time saved: 1 hour/week</strong></p>
            
            <h2>Total Time Saved: 12+ Hours Every Week!</h2>
            <p>That's <strong>50+ hours per month</strong> or <strong>600+ hours per year</strong>. Imagine what you could do with that extra time!</p>
            
            <h2>Get Started Today</h2>
            <p>Don't waste another day on manual work. Browse our <a href="tools.html">premium automation tools</a> and start saving time today!</p>
        `
    },
    {
        id: 5,
        title: "Top 10 Business Excel Tools You Need in 2025",
        excerpt: "The complete list of must-have Excel tools for modern businesses to stay competitive and productive.",
        category: "Business",
        author: "Shiwendu",
        date: "2025-01-03",
        readTime: "8 min read",
        icon: "fas fa-briefcase",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        featured: false,
        content: `
            <h2>Why Excel Tools Matter in 2025</h2>
            <p>In today's competitive business landscape, Excel tools can give you a massive edge. Here are the top 10 you need.</p>
            
            <h2>1. File Management Dashboard - ₹1,099</h2>
            <p>Manage thousands of files with one click. Bulk rename, search, organize, and find duplicates instantly.</p>
            
            <h2>2. Sales Analytics Pro - ₹5,499</h2>
            <p>Transform your sales data into beautiful, interactive dashboards with real-time KPIs.</p>
            
            <h2>3. GST Reconciliation Tool - ₹1,299</h2>
            <p>Match GSTR-2B with purchase register automatically. Essential for accurate GST filing.</p>
            
            <h2>4. Email Automation Pro - ₹1,199</h2>
            <p>Send bulk personalized emails with attachments. Track opens and clicks.</p>
            
            <h2>5. Invoice Generator - ₹599</h2>
            <p>Professional GST-compliant invoices with custom templates and PDF export.</p>
            
            <h2>6. Excel Merge Master - ₹299</h2>
            <p>Combine multiple workbooks and sheets into one consolidated file instantly.</p>
            
            <h2>7. Depreciation Tool - ₹5,499</h2>
            <p>Tally Prime compatible depreciation calculations. Saves hours of manual work.</p>
            
            <h2>8. Vendor Reconciliation - ₹999</h2>
            <p>Reconcile vendor ledgers automatically. Identify discrepancies instantly.</p>
            
            <h2>9. Project Tracker Pro - ₹1,299</h2>
            <p>Complete project management with Gantt charts and team collaboration.</p>
            
            <h2>10. Custom Tool Development - ₹4,999+</h2>
            <p>Get tools built specifically for your unique business needs.</p>
            
            <h2>Get All Tools Today!</h2>
            <p><a href="tools.html">Browse our complete catalog</a> and start transforming your business productivity. Use code <strong>FLASH20</strong> for 20% off!</p>
        `
    },
    {
        id: 6,
        title: "How to Filing Income Tax Return - Complete Guide 2025",
        excerpt: "Step-by-step guide to filing your ITR correctly and maximizing your tax savings legally.",
        category: "GST & Tax",
        author: "Shiwendu",
        date: "2024-12-28",
        readTime: "12 min read",
        icon: "fas fa-file-alt",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        featured: false,
        content: `
            <h2>Understanding Income Tax Returns</h2>
            <p>Filing ITR is mandatory if your income exceeds the basic exemption limit. Filing on time helps you avoid penalties and claim refunds.</p>
            
            <h2>Who Should File ITR?</h2>
            <ul>
                <li>Salaried individuals (income > ₹2.5 lakh)</li>
                <li>Business owners</li>
                <li>Freelancers and consultants</li>
                <li>Anyone wanting to claim TDS refund</li>
                <li>For loan applications</li>
            </ul>
            
            <h2>Documents Required</h2>
            <ul>
                <li>PAN Card</li>
                <li>Aadhaar Card</li>
                <li>Bank account details</li>
                <li>Form 16 (for salaried)</li>
                <li>Form 26AS</li>
                <li>Investment proofs (80C, 80D, etc.)</li>
                <li>Property documents (if applicable)</li>
            </ul>
            
            <h2>Tax Saving Tips</h2>
            <ol>
                <li>Maximize 80C investments (₹1.5 lakh)</li>
                <li>Health insurance under 80D</li>
                <li>Home loan interest deduction</li>
                <li>NPS contributions</li>
                <li>Donations under 80G</li>
            </ol>
            
            <h2>Need Professional Help?</h2>
            <p>Filing ITR can be complex. Our <a href="services.html">professional ITR filing service (₹1,499)</a> ensures accurate filing by qualified Chartered Accountants. Maximize your refund and avoid notices!</p>
        `
    }
];

// ============================================
// LOAD BLOG FUNCTIONS
// ============================================
function loadBlogs() {
    const featuredContainer = document.getElementById('featuredArticle');
    const gridContainer = document.getElementById('blogGrid');
    
    if (!gridContainer) return;
    
    // Load featured article
    const featured = blogArticles.find(b => b.featured);
    if (featured && featuredContainer) {
        featuredContainer.innerHTML = createFeaturedBlogCard(featured);
    }
    
    // Load all other articles
    const others = blogArticles.filter(b => !b.featured);
    gridContainer.innerHTML = others.map(createBlogCard).join('');
}

function createFeaturedBlogCard(blog) {
    return `
        <div class="featured-blog-card" onclick="openBlog(${blog.id})">
            <div class="featured-blog-badge">⭐ FEATURED</div>
            <div class="featured-blog-image" style="background: ${blog.gradient};">
                <i class="${blog.icon}"></i>
            </div>
            <div class="featured-blog-content">
                <div class="blog-category-tag">${blog.category}</div>
                <h2>${blog.title}</h2>
                <p>${blog.excerpt}</p>
                <div class="blog-meta">
                    <span><i class="fas fa-user"></i> ${blog.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(blog.date)}</span>
                    <span><i class="fas fa-clock"></i> ${blog.readTime}</span>
                </div>
                <button class="btn btn-primary">Read Full Article <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `;
}

function createBlogCard(blog) {
    return `
        <article class="blog-card" data-category="${blog.category}" data-title="${blog.title.toLowerCase()}" onclick="openBlog(${blog.id})">
            <div class="blog-card-image" style="background: ${blog.gradient};">
                <i class="${blog.icon}"></i>
            </div>
            <div class="blog-card-content">
                <div class="blog-category-tag">${blog.category}</div>
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <div class="blog-meta">
                    <span><i class="fas fa-clock"></i> ${blog.readTime}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(blog.date)}</span>
                </div>
                <a href="#" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function openBlog(blogId) {
    const blog = blogArticles.find(b => b.id === blogId);
    if (!blog) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="blog-modal-overlay" onclick="closeBlog()"></div>
        <div class="blog-modal-content">
            <button class="blog-modal-close" onclick="closeBlog()">
                <i class="fas fa-times"></i>
            </button>
            <div class="blog-modal-header" style="background: ${blog.gradient};">
                <i class="${blog.icon}"></i>
                <div>
                    <div class="blog-category-tag" style="background: rgba(255,255,255,0.2); color: white;">
                        ${blog.category}
                    </div>
                    <h1>${blog.title}</h1>
                    <div class="blog-meta" style="color: rgba(255,255,255,0.9);">
                        <span><i class="fas fa-user"></i> ${blog.author}</span>
                        <span><i class="fas fa-calendar"></i> ${formatDate(blog.date)}</span>
                        <span><i class="fas fa-clock"></i> ${blog.readTime}</span>
                    </div>
                </div>
            </div>
            <div class="blog-modal-body">
                ${blog.content}
            </div>
            <div class="blog-modal-footer">
                <div class="blog-share">
                    <span>Share:</span>
                    <button onclick="shareBlog('whatsapp', ${blog.id})" style="background: #25D366;">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                    <button onclick="shareBlog('twitter', ${blog.id})" style="background: #1DA1F2;">
                        <i class="fab fa-twitter"></i>
                    </button>
                    <button onclick="shareBlog('linkedin', ${blog.id})" style="background: #0077B5;">
                        <i class="fab fa-linkedin"></i>
                    </button>
                </div>
                <a href="tools.html" class="btn btn-primary">
                    <i class="fas fa-rocket"></i> Browse Our Tools
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeBlog() {
    const modal = document.querySelector('.blog-modal');
    if (modal) modal.remove();
    document.body.style.overflow = 'auto';
}

function shareBlog(platform, blogId) {
    const blog = blogArticles.find(b => b.id === blogId);
    if (!blog) return;
    
    const url = window.location.href;
    const text = `📖 ${blog.title} - by SS Tools Hub`;
    
    let shareUrl = '';
    switch(platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }
    
    window.open(shareUrl, '_blank');
}

function filterBlogs() {
    const search = document.getElementById('blogSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.blog-card');
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const category = (card.getAttribute('data-category') || '').toLowerCase();
        if (title.includes(search) || category.includes(search)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterBlogCategory(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Load on page ready
document.addEventListener('DOMContentLoaded', loadBlogs);
