        // Initialize EmailJS with your Public Key
        (function() {
            emailjs.init("Ynrq1nepvA4WteLv1");
        })();

        // Mobile Menu Toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });
        
        // Project Filtering
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                document.querySelectorAll('.project-card').forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Project link handlers
        document.querySelectorAll('.demo-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('This project demo will be available soon!');
            });
        });
        
        document.querySelectorAll('.github-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Source code will be available on GitHub soon!');
            });
        });
        
        // Contact Form Submission with EmailJS
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            emailjs.sendForm('service_vn4qpbl', 'template_pwiqqhq', this)
                .then(function(response) {
                    alert('Thank you! Your message has been sent successfully. I will get back to you soon.');
                    document.getElementById('contactForm').reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, function(error) {
                    alert('Sorry, there was an error sending your message. Please try again or email me directly at solomonadiele1@gmail.com');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });