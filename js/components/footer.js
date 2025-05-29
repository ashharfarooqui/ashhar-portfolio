/*
 * Footer Component
 * Handles footer-specific functionality
 */

// Initialize footer components
function initFooter() {
    // Add back to top functionality if needed
    // Note: Basic back-to-top functionality is already in main.js
    // This is for any footer-specific additions
    
    // Copyright year
    updateCopyrightYear();
}

// Update copyright year automatically
function updateCopyrightYear() {
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace(/\d{4}/, currentYear);
    }
}

// Export the init function
window.initFooter = initFooter;

// Auto-initialize on load
document.addEventListener('DOMContentLoaded', initFooter); 