/*
 * Main JavaScript file
 * Contains core functionality used across all pages
 */

// DOM ready function
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeThemeToggle();
    initializeBackToTop();
    
    // Initialize the hero animation from the component
    if (typeof window.initHeroAnimation === 'function') {
        window.initHeroAnimation();
    }
    
    // Other global initializations here
});

/* ----- Navigation functionality ----- */
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!event.target.closest('nav')) {
                navLinks.classList.remove('active');
            }
        }
    });
}

/* ----- Theme toggle functionality ----- */
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        // Check for saved theme preference or respect OS preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark-mode');
        }
        
        // Theme toggle button
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }
}

/* ----- Back to Top button functionality ----- */
function initializeBackToTop() {
    // This will add a back-to-top button if it doesn't exist
    if (!document.querySelector('.back-to-top')) {
        const backToTopButton = document.createElement('div');
        backToTopButton.className = 'back-to-top';
        backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTopButton);
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/* ----- Utility Functions ----- */

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Dynamic image loading with blur-up technique
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Export functions to global scope for use in other scripts
window.utils = {
    animateOnScroll,
    lazyLoadImages
};

// Main JavaScript file for the portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Create Hero Animation Data Grid
    function createHeroAnimation() {
        const heroAnimation = document.querySelector('.hero-animation');
        if (heroAnimation) {
            // Create data grid
            const dataGrid = document.createElement('div');
            dataGrid.className = 'data-grid';
            heroAnimation.appendChild(dataGrid);
            
            // Create data points
            const gridSize = window.innerWidth < 768 ? 10 : 20; // Fewer points on mobile
            const totalPoints = gridSize * gridSize;
            
            for (let i = 0; i < totalPoints; i++) {
                const dataPoint = document.createElement('div');
                dataPoint.className = 'data-point';
                dataGrid.appendChild(dataPoint);
                
                // Randomly highlight some points
                if (Math.random() < 0.15) { // 15% chance to be highlighted
                    dataPoint.classList.add('highlight');
                }
            }
            
            // Create random connecting lines between points
            const numLines = window.innerWidth < 768 ? 15 : 30;
            for (let i = 0; i < numLines; i++) {
                const line = document.createElement('div');
                line.className = 'data-line';
                
                // Random position and angle
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                const length = 20 + Math.random() * 60; // Line length between 20 and 80
                const angle = Math.random() * 360; // Random angle in degrees
                
                line.style.left = startX + '%';
                line.style.top = startY + '%';
                line.style.width = length + 'px';
                line.style.transform = `rotate(${angle}deg)`;
                
                heroAnimation.appendChild(line);
            }

            // Add animation to data points
            animateDataPoints();
        }
    }
    
    // Function to animate data points over time
    function animateDataPoints() {
        const dataPoints = document.querySelectorAll('.hero-animation .data-point');
        
        // Create random "pulse" animations on some points
        setInterval(() => {
            // Randomly select some points to highlight/unhighlight
            const randomPoint = dataPoints[Math.floor(Math.random() * dataPoints.length)];
            
            if (randomPoint) {
                // Toggle highlight class with animation
                randomPoint.classList.add('animate-pulse');
                
                if (randomPoint.classList.contains('highlight')) {
                    randomPoint.classList.remove('highlight');
                } else {
                    randomPoint.classList.add('highlight');
                }
                
                // Remove animation class after animation completes
                setTimeout(() => {
                    randomPoint.classList.remove('animate-pulse');
                }, 1000);
            }
        }, 200);
        
        // Create "data flow" effect between lines and points
        const dataLines = document.querySelectorAll('.hero-animation .data-line');
        setInterval(() => {
            // Highlight a random line
            if (dataLines.length > 0) {
                const randomLine = dataLines[Math.floor(Math.random() * dataLines.length)];
                randomLine.classList.add('active');
                
                // Remove highlight after a short time
                setTimeout(() => {
                    randomLine.classList.remove('active');
                }, 800);
            }
        }, 400);
    }
    
    // Call hero animation creation
    createHeroAnimation();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for animation on scroll
    const animatedElements = document.querySelectorAll('.animate-fadeIn, .skill-item, .project-card, .blog-card, .approach-item, .technique-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Only animate once
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers without Intersection Observer support
        animatedElements.forEach(el => {
            el.classList.add('visible');
        });
    }
    
    // Fix skill icons that might be broken
    const skillIcons = document.querySelectorAll('.skill-item img');
    skillIcons.forEach(icon => {
        icon.addEventListener('error', function() {
            const span = this.nextElementSibling;
            const skillName = span ? span.textContent.trim() : '';
            
            // Create a fallback SVG with the first letter of the skill name
            if (skillName) {
                const letter = skillName.charAt(0).toUpperCase();
                const fallbackSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                fallbackSvg.setAttribute('viewBox', '0 0 50 50');
                fallbackSvg.setAttribute('width', '50');
                fallbackSvg.setAttribute('height', '50');
                
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', '25');
                circle.setAttribute('cy', '25');
                circle.setAttribute('r', '20');
                circle.setAttribute('fill', '#2563eb');
                
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', '25');
                text.setAttribute('y', '32');
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', 'white');
                text.setAttribute('font-size', '20px');
                text.setAttribute('font-weight', 'bold');
                text.textContent = letter;
                
                fallbackSvg.appendChild(circle);
                fallbackSvg.appendChild(text);
                
                // Replace the broken image with the SVG
                this.parentNode.replaceChild(fallbackSvg, this);
            }
        });
    });
    
    // Add responsive behavior for network animations
    function adjustNetworkAnimations() {
        const networkAnimations = document.querySelectorAll('.network-animation');
        if (window.innerWidth < 768) {
            networkAnimations.forEach(animation => {
                const nodes = animation.querySelectorAll('.network-node');
                if (nodes.length > 30) {
                    // Reduce number of nodes on mobile
                    for (let i = 30; i < nodes.length; i++) {
                        nodes[i].style.display = 'none';
                    }
                }
            });
        } else {
            networkAnimations.forEach(animation => {
                const nodes = animation.querySelectorAll('.network-node');
                nodes.forEach(node => {
                    node.style.display = 'block';
                });
            });
        }
    }
    
    // Initial adjustment and resize handler
    adjustNetworkAnimations();
    window.addEventListener('resize', adjustNetworkAnimations);

    // Refresh hero animation on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        // Debounce the resize event to prevent too many refreshes
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            const heroAnimation = document.querySelector('.hero-animation');
            if (heroAnimation) {
                // Clear existing animation
                heroAnimation.innerHTML = '';
                // Recreate animation
                createHeroAnimation();
            }
        }, 250);
    });

    // Header shadow on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Project Filtering
    const projectFilters = document.querySelectorAll('.project-filter-btn');
    const projectItems = document.querySelectorAll('.project-card');

    if (projectFilters.length > 0 && projectItems.length > 0) {
        projectFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Remove active class from all filters
                projectFilters.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked filter
                filter.classList.add('active');
                
                const filterValue = filter.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        
                        // Add animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        
                        // Hide after animation completes
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Skills animation on scroll
    const skillItems = document.querySelectorAll('.skill-item');

    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        skillItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < triggerBottom) {
                item.classList.add('show');
            }
        });
    };

    // Initial check for visible elements
    animateOnScroll();

    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }

    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Clear previous error states
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });
            
            // Validate name
            if (!nameInput.value.trim()) {
                document.querySelector('.form-group.name').classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                document.querySelector('.form-group.email').classList.add('error');
                isValid = false;
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                document.querySelector('.form-group.message').classList.add('error');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
}); 