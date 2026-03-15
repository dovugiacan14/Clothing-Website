// ===== Shopping Cart Functionality =====
let cartItems = [];
const cartCountElement = document.getElementById('cart-count');

// Update cart count
function updateCartCount() {
    cartCountElement.textContent = cartItems.length;
}

// Add to cart
function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCartCount();
    showToast(`Đã thêm "${productName}" vào giỏ hàng!`);
}

// Show toast notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast show position-fixed';
    toast.style.cssText = 'bottom: 20px; right: 20px; z-index: 1050; background-color: #198754; color: white; padding: 15px 25px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.3); animation: slideInRight 0.3s ease;';
    toast.innerHTML = `
        <i class="bi bi-check-circle me-2"></i>
        ${message}
    `;

    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Product Filter =====
const filterButtons = document.querySelectorAll('#product-filters .btn');
const productItems = document.querySelectorAll('.product-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filter products
        productItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ===== Wishlist Functionality =====
const wishlistButtons = document.querySelectorAll('.btn-wishlist');

wishlistButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            this.innerHTML = '<i class="bi bi-heart-fill"></i>';
            showToast('Đã thêm vào danh sách yêu thích!');
        } else {
            this.innerHTML = '<i class="bi bi-heart"></i>';
            showToast('Đã xóa khỏi danh sách yêu thích!');
        }
    });
});

// ===== Add to Cart Buttons =====
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.card-title').textContent;
        const priceText = productCard.querySelector('.fw-bold').textContent;

        // Remove currency symbol and dots
        const price = parseInt(priceText.replace(/[^\d]/g, ''));

        addToCart(productName, price);
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===== Smooth Scroll for Navigation Links =====
const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Animation on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .product-card').forEach(el => {
    observer.observe(el);
});

// ===== Newsletter Form =====
const newsletterForm = document.querySelector('.newsletter-section form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput.value) {
            showToast('Cảm ơn bạn đã đăng ký nhận tin!');
            emailInput.value = '';
        }
    });
}

// ===== Cart Button Click =====
const cartButton = document.querySelector('.btn-outline-dark');

if (cartButton) {
    cartButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            showToast('Giỏ hàng của bạn đang trống!');
        } else {
            showToast(`Giỏ hàng có ${cartItems.length} sản phẩm`);
            // Here you can add code to open cart modal
        }
    });
}

// ===== CSS Animations =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Product Card Hover Effect =====
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Fashion Store initialized successfully!');

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Window Resize Handler =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle responsive adjustments if needed
        console.log('Window resized');
    }, 250);
});
