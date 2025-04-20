document.addEventListener('DOMContentLoaded', function() {
    // Particle configuration
    const particleConfig = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#6c63ff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#6c63ff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    };

    // Function to adapt particle colors to match current theme
    function updateParticleColors() {
        const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color').trim();
        
        if (window.pJSDom && window.pJSDom.length > 0) {
            const pJS = window.pJSDom[0].pJS;
            
            // Update particle color
            pJS.particles.color.value = primaryColor;
            pJS.particles.line_linked.color = primaryColor;
            
            // Refresh particles
            pJS.fn.particlesRefresh();
        }
    }
    
    // Create container for particles
    if (!document.getElementById('particles-js')) {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'particles-js';
        document.body.appendChild(particlesContainer);
    }
    
    // Load particles.js library and initialize
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function() {
        window.particlesJS('particles-js', particleConfig);
        
        // Listen for theme changes through custom event
        document.addEventListener('themeChange', function(e) {
            setTimeout(updateParticleColors, 100);
        });
        
        // Initial update
        updateParticleColors();
    };
    document.head.appendChild(script);
}); 