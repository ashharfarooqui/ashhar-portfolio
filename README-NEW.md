# Data Science Portfolio

A modern, responsive portfolio website showcasing data science projects, skills, and expertise.

## Project Structure

```
DataSciencePortfolio/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects listing page
├── skills.html             # Skills page
├── blog.html               # Blog listing page
├── contact.html            # Contact page
├── prompt-engineering.html # Prompt engineering page
├── css/                    # CSS files
│   ├── base/               # Base styles
│   │   └── globals.css     # Global styles
│   ├── components/         # Component styles
│   │   ├── navigation.css  # Navigation styles
│   │   ├── hero.css        # Hero section styles
│   │   └── footer.css      # Footer styles
│   ├── pages/              # Page-specific styles
│   │   ├── index-styles.css
│   │   ├── about-styles.css
│   │   └── ...
│   ├── utils/              # Utility styles
│   │   ├── icon-fixes.css  # Icon utility styles
│   │   └── image-styles.css # Image utility styles
│   ├── modern-styles.css   # CSS variables and theme
│   └── main.css            # Main CSS import file
├── js/                     # JavaScript files
│   ├── components/         # Component scripts
│   │   ├── hero-animation.js
│   │   └── footer.js
│   ├── pages/              # Page-specific scripts
│   ├── utils/              # Utility scripts
│   └── main.js             # Main JavaScript file
├── assets/                 # Static assets
│   └── images/             # Image files
├── projects/               # Project detail pages
└── blog/                   # Blog post pages
```

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Interactive data visualization elements
- Project portfolio with filtering
- Skills visualization
- Blog section
- Contact form

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript (vanilla, no frameworks)
- Font Awesome for icons

## CSS Organization

The CSS is organized in a modular way:

1. **Base**: Contains global styles and variables
2. **Components**: Reusable UI components like navigation, footer, etc.
3. **Pages**: Page-specific styles
4. **Utils**: Utility classes for common patterns

## JavaScript Organization

The JavaScript follows a similar structure:

1. **Components**: Reusable UI component functionality
2. **Pages**: Page-specific scripts
3. **Utils**: Utility functions
4. **main.js**: Core functionality used across all pages

## Getting Started

1. Clone the repository
2. Open index.html in your browser
3. No build process required - this is a static site

## Customization

To customize this portfolio:

1. Update content in HTML files
2. Modify theme colors in `css/modern-styles.css`
3. Add your own projects in the projects directory
4. Add blog posts in the blog directory

## License

MIT License - Feel free to use and modify for your own portfolio! 