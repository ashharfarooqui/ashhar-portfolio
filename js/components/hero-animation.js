/*
 * Hero Animation Component
 * Creates the network animation effect on hero sections
 */

// Main initialization - called by main.js
function initHeroAnimation() {
    const animationContainer = document.getElementById('networkAnimation');
    if (animationContainer) {
        createHeroAnimation();
    }
}

// Create the network animation
function createHeroAnimation() {
    const container = document.getElementById('networkAnimation');
    if (!container) return;
    
    // Configuration
    const config = {
        nodeCount: window.innerWidth < 768 ? 30 : 50,
        connectionDistance: window.innerWidth < 768 ? 150 : 200,
        nodeSize: 4,
        animationSpeed: 0.5
    };
    
    // Clear any existing nodes
    container.innerHTML = '';
    
    // Create nodes
    const nodes = [];
    for (let i = 0; i < config.nodeCount; i++) {
        const node = document.createElement('div');
        node.classList.add('network-node');
        
        // Random position
        const x = Math.random() * container.offsetWidth;
        const y = Math.random() * container.offsetHeight;
        
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        
        // Random movement
        const speedX = (Math.random() - 0.5) * config.animationSpeed;
        const speedY = (Math.random() - 0.5) * config.animationSpeed;
        
        nodes.push({
            element: node,
            x: x,
            y: y,
            speedX: speedX,
            speedY: speedY
        });
        
        container.appendChild(node);
    }
    
    // Create connections between nodes
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const line = document.createElement('div');
            line.classList.add('network-line');
            container.appendChild(line);
            connections.push({
                element: line,
                nodeA: nodes[i],
                nodeB: nodes[j]
            });
        }
    }
    
    // Mouse interaction effects
    let mouseX = 0;
    let mouseY = 0;
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });
    
    container.addEventListener('mouseleave', () => {
        mouseX = container.offsetWidth / 2;
        mouseY = container.offsetHeight / 2;
    });
    
    // Animation loop
    function animate() {
        // Update node positions
        nodes.forEach(node => {
            node.x += node.speedX;
            node.y += node.speedY;
            
            // Bounce off edges
            if (node.x <= 0 || node.x >= container.offsetWidth) node.speedX *= -1;
            if (node.y <= 0 || node.y >= container.offsetHeight) node.speedY *= -1;
            
            // Apply position
            node.element.style.left = `${node.x}px`;
            node.element.style.top = `${node.y}px`;
            
            // Mouse interaction
            const dx = mouseX - node.x;
            const dy = mouseY - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                node.element.classList.add('active');
            } else {
                node.element.classList.remove('active');
            }
        });
        
        // Update connections
        connections.forEach(connection => {
            const dx = connection.nodeB.x - connection.nodeA.x;
            const dy = connection.nodeB.y - connection.nodeA.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < config.connectionDistance) {
                const opacity = 1 - (distance / config.connectionDistance);
                connection.element.style.opacity = opacity;
                
                // Position and rotate line
                connection.element.style.width = `${distance}px`;
                connection.element.style.left = `${connection.nodeA.x}px`;
                connection.element.style.top = `${connection.nodeA.y}px`;
                
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                connection.element.style.transform = `rotate(${angle}deg)`;
                
                // Check if line is near mouse
                const midX = (connection.nodeA.x + connection.nodeB.x) / 2;
                const midY = (connection.nodeA.y + connection.nodeB.y) / 2;
                const mouseDx = mouseX - midX;
                const mouseDy = mouseY - midY;
                const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
                
                if (mouseDistance < 100) {
                    connection.element.classList.add('active');
                } else {
                    connection.element.classList.remove('active');
                }
            } else {
                connection.element.style.opacity = 0;
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    // Start animation loop
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // Adjust the bounds
        nodes.forEach(node => {
            if (node.x > container.offsetWidth) node.x = container.offsetWidth;
            if (node.y > container.offsetHeight) node.y = container.offsetHeight;
        });
    });
}

// Export function for use in main.js
window.initHeroAnimation = initHeroAnimation; 