// MOBILE MENU TOGGLE
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// COUNTER ANIMATION
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current) + (target === 99 ? '' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (target === 99 ? '' : '+');
            }
        };
        updateCounter();
    });
}

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) observer.observe(heroStats);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }
});

// PAYMENT GATEWAY INTEGRATION (Razorpay Example)
function initiatePayment(toolId, amount, toolName) {
    const options = {
        key: "YOUR_RAZORPAY_KEY_HERE", // Replace with your Razorpay key
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "SS Tools Hub",
        description: toolName,
        image: "logo.png",
        handler: function (response) {
            // Payment success
            const paymentId = response.razorpay_payment_id;
            alert("Payment Successful! ID: " + paymentId);
            // Send to your backend to verify and grant access
            grantAccess(toolId, paymentId);
        },
        prefill: {
            name: "",
            email: "",
            contact: ""
        },
        theme: {
            color: "#667eea"
        }
    };
    
    const rzp = new Razorpay(options);
    rzp.open();
}

// GRANT ACCESS AFTER PAYMENT
function grantAccess(toolId, paymentId) {
    // Send to backend
    fetch('/api/grant-access', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({toolId, paymentId})
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard.html?tool=' + toolId;
        }
    });
}

// CONTACT FORM
function submitContactForm(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Send via email or backend
    const mailto = `mailto:shiwendu@zohomail.in?subject=SS Tools Hub - ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailto;
}

// FILTER TOOLS
function filterTools(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const tools = document.querySelectorAll('.tool-card');
    tools.forEach(tool => {
        if (category === 'all' || tool.dataset.category === category) {
            tool.style.display = 'block';
        } else {
            tool.style.display = 'none';
        }
    });
}