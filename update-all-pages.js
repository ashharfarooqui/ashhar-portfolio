/**
 * This script adds CSS and JS references to all HTML files
 * and removes existing network animation scripts
 */

// Run this script with Node.js

const fs = require('fs');
const path = require('path');

// Get all HTML files in the main directory
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html') && file !== 'index.html');

// Function to update each HTML file
function updateFile(filePath) {
    console.log(`Processing: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add hero-styles.css after modern-styles.css if not already present
    if (!content.includes('href="css/hero-styles.css"')) {
        content = content.replace(
            /<link rel="stylesheet" href="css\/modern-styles.css">/,
            '<link rel="stylesheet" href="css/modern-styles.css">\n    <link rel="stylesheet" href="css/hero-styles.css">'
        );
    }
    
    // Add page-banner-styles.css if not already present
    if (!content.includes('href="css/page-banner-styles.css"')) {
        content = content.replace(
            /<link rel="stylesheet" href="css\/hero-styles.css">/,
            '<link rel="stylesheet" href="css/hero-styles.css">\n    <link rel="stylesheet" href="css/page-banner-styles.css">'
        );
    }
    
    // Add hero-animation.js after main.js if not already present
    if (!content.includes('src="js/hero-animation.js"')) {
        if (content.includes('<script src="js/main.js"></script>')) {
            content = content.replace(
                /<script src="js\/main.js"><\/script>/,
                '<script src="js/main.js"></script>\n    <script src="js/hero-animation.js"></script>'
            );
        } else {
            // If main.js is not found, add both scripts before body end
            content = content.replace(
                /<\/body>/,
                '    <script src="js/main.js"></script>\n    <script src="js/hero-animation.js"></script>\n</body>'
            );
        }
    }
    
    // Fix the dataParticles id in about.html to match the other pages
    if (filePath.includes('about.html')) {
        content = content.replace(
            /id="dataParticles"/,
            'id="networkAnimation"'
        );
    }
    
    // Replace any existing network animation script with nothing
    // Improved pattern to match the script tags containing any network animation code
    content = content.replace(
        /<script>[\s\S]*?(?:networkAnimation|dataParticles)[\s\S]*?<\/script>/g,
        ''
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
}

// Process each HTML file
htmlFiles.forEach(file => {
    updateFile(file);
});

console.log("All files have been updated!"); 