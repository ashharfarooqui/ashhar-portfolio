# Implementation Guide for Portfolio Images

This guide provides steps for implementing the recommended images into your data science portfolio website.

## Setup Steps

1. **Create Image Folders Structure**
   ```bash
   mkdir -p images/hero
   mkdir -p images/about
   mkdir -p images/projects
   mkdir -p images/blog
   mkdir -p images/contact
   mkdir -p images/prompt
   mkdir -p images/icons
   ```

2. **Image Optimization**
   - Download all images from the sources provided in the recommendations document
   - Optimize images before uploading using a tool like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Resize hero images to 1920x1080px for desktop (create smaller versions for mobile)
   - Resize thumbnails to 800x600px or 600x400px depending on your layout
   - Save in modern formats (WebP with JPEG fallback) for better performance

## Implementation by Page

### Homepage (index.html)

1. **Hero Section Background**
   ```css
   /* In styles.css */
   .hero {
       background: url('../images/hero/tech-workspace.jpg') no-repeat center center;
       background-size: cover;
       position: relative;
   }
   
   /* Add overlay for text readability */
   .hero::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4));
       z-index: 1;
   }
   
   .hero-content {
       position: relative;
       z-index: 2;
   }
   ```

2. **Professional Headshot**
   ```html
   <!-- In the hero section of index.html -->
   <div class="hero-image">
       <img src="images/about/profile.jpg" alt="Ashhar Farooqui - Data Scientist">
   </div>
   ```

3. **Project Thumbnails**
   ```html
   <!-- In the featured projects section -->
   <div class="project-image">
       <img src="images/projects/project1.jpg" alt="Predictive Sales Analysis">
   </div>
   <!-- Repeat for other project thumbnails -->
   ```

4. **Call-to-Action Backgrounds**
   ```css
   /* In styles.css */
   .cta-buttons .primary-btn {
       background: url('../images/hero/data-grid.jpg') no-repeat center center;
       background-size: cover;
       position: relative;
   }
   
   .cta-buttons .primary-btn::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: rgba(23, 43, 77, 0.85);
       z-index: -1;
   }
   ```

### About Page (about.html)

1. **Professional Portrait**
   ```html
   <div class="about-image">
       <img src="images/about/profile.jpg" alt="Ashhar Farooqui">
   </div>
   ```

2. **Background Image for Page Banner**
   ```css
   /* In styles.css */
   .page-banner {
       background: url('../images/about/clean-workspace.jpg') no-repeat center center;
       background-size: cover;
       position: relative;
   }
   
   .page-banner::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4));
       z-index: 1;
   }
   
   .banner-content {
       position: relative;
       z-index: 2;
   }
   ```

3. **Timeline Icons**
   ```html
   <div class="timeline-item">
       <div class="timeline-dot">
           <img src="images/icons/briefcase.svg" alt="Work Experience">
       </div>
       <!-- Experience content -->
   </div>
   ```

4. **Team/Collaboration Image**
   ```html
   <div class="team-collaboration">
       <img src="images/about/team-collaboration.jpg" alt="Team Collaboration">
       <p class="caption">Collaborating with cross-functional teams on data projects</p>
   </div>
   ```

### Contact Page (contact.html)

1. **Background Image**
   ```css
   .contact-section {
       background: url('../images/contact/digital-communication.jpg') no-repeat center center;
       background-size: cover;
       background-attachment: fixed;
       position: relative;
   }
   
   .contact-section::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: rgba(255,255,255,0.92);
       z-index: 1;
   }
   
   .contact-section .container {
       position: relative;
       z-index: 2;
   }
   ```

2. **Contact Method Icons**
   ```html
   <div class="info-icon">
       <img src="images/icons/email.svg" alt="Email">
   </div>
   <!-- Repeat for other contact methods -->
   ```

3. **Map Image**
   ```html
   <!-- If not using Google Maps embed -->
   <div class="map-placeholder">
       <img src="images/contact/styled-map.jpg" alt="Location Map">
   </div>
   ```

### Projects Page (projects.html)

1. **Project Thumbnails**
   ```html
   <div class="project-card machine-learning data-viz">
       <div class="project-image">
           <img src="images/projects/sales-dashboard.jpg" alt="Predictive Sales Analysis">
       </div>
       <!-- Project info -->
   </div>
   <!-- Repeat for other projects -->
   ```

2. **Page Background**
   ```css
   .projects-section {
       background: url('../images/projects/data-science-bg.jpg') no-repeat center center;
       background-size: cover;
       background-attachment: fixed;
       position: relative;
   }
   
   .projects-section::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: rgba(255,255,255,0.97);
       z-index: 1;
   }
   
   .projects-section .container {
       position: relative;
       z-index: 2;
   }
   ```

3. **Gradient Overlays**
   ```css
   .project-card .project-image::after {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: linear-gradient(rgba(44, 62, 80, 0.1), rgba(74, 85, 104, 0.6));
       opacity: 0;
       transition: opacity 0.3s;
   }
   
   .project-card:hover .project-image::after {
       opacity: 1;
   }
   ```

### Prompt Engineering Page (prompt-engineering.html)

1. **Hero Background**
   ```css
   .pe-intro {
       background: url('../images/prompt/ai-concept.jpg') no-repeat center center;
       background-size: cover;
       position: relative;
       color: #fff;
   }
   
   .pe-intro::before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: linear-gradient(rgba(23, 43, 77, 0.85), rgba(42, 67, 101, 0.75));
       z-index: 1;
   }
   
   .pe-intro .container {
       position: relative;
       z-index: 2;
   }
   ```

2. **Category Thumbnails**
   ```html
   <div class="prompt-category">
       <div class="category-image">
           <img src="images/prompt/text-generation.jpg" alt="ChatGPT Prompts">
       </div>
       <h3>ChatGPT Prompts</h3>
       <!-- Category content -->
   </div>
   <!-- Repeat for other categories -->
   ```

3. **AI Concept Icons**
   ```html
   <div class="approach-item">
       <div class="approach-icon">
           <img src="images/icons/connected-thoughts.svg" alt="Chain of Thought">
       </div>
       <h3>Chain of Thought (CoT)</h3>
       <!-- Technique content -->
   </div>
   <!-- Repeat for other techniques -->
   ```

4. **Section Separators**
   ```css
   .section-separator {
       height: 150px;
       background: url('../images/prompt/tech-separator.jpg') no-repeat center center;
       background-size: cover;
       margin: 60px 0;
   }
   ```

## Responsive Considerations

1. **Mobile Adjustments**
   ```css
   @media (max-width: 768px) {
       /* Smaller/compressed images for mobile */
       .hero {
           background-image: url('../images/hero/tech-workspace-mobile.jpg');
       }
       
       /* Adjust background positions for mobile */
       .page-banner {
           background-position: top center;
       }
       
       /* Make sure images scale correctly */
       .project-image img,
       .about-image img {
           width: 100%;
           height: auto;
       }
   }
   ```

2. **Image Loading Optimization**
   ```html
   <!-- In the <head> section for critical images -->
   <link rel="preload" href="images/hero/tech-workspace.jpg" as="image">
   
   <!-- For non-critical images, use loading="lazy" -->
   <img src="images/projects/project3.jpg" alt="Project 3" loading="lazy">
   ```

## Image Fallbacks and Accessibility

1. **Image Fallbacks**
   ```html
   <picture>
       <source srcset="images/hero/tech-workspace.webp" type="image/webp">
       <source srcset="images/hero/tech-workspace.jpg" type="image/jpeg">
       <img src="images/hero/tech-workspace.jpg" alt="Modern tech workspace">
   </picture>
   ```

2. **Accessibility Improvements**
   ```html
   <!-- All images should have meaningful alt text -->
   <img src="images/projects/nlp-visualization.jpg" 
        alt="Natural Language Processing visualization showing text analysis" 
        aria-describedby="nlp-desc">
   <p id="nlp-desc" class="visually-hidden">A visual representation of text being processed through natural language algorithms, with connections between related concepts highlighted in blue.</p>
   ```

## Implementation Checklist

- [ ] Create folder structure
- [ ] Download and optimize all images
- [ ] Implement hero section background image
- [ ] Add project thumbnails
- [ ] Implement about page images
- [ ] Add contact page visuals
- [ ] Implement icons and small UI elements
- [ ] Add prompt engineering page visuals
- [ ] Test responsive behavior across devices
- [ ] Verify image loading performance
- [ ] Ensure all images have proper alt text 