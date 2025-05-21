// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle the menu on button click
mobileMenuButton.addEventListener('click', (event) => {
    event.stopPropagation();  // Prevent the click event from propagating to the document
    mobileMenu.classList.toggle('hidden');  // Toggle visibility of menu
});

// Close the dropdown if clicked outside of the menu
document.addEventListener('click', (event) => {
    // Check if the click was outside the mobile menu and button
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenu.classList.add('hidden');  // Close the menu if clicked outside
    }
});


// Product Tabs
const tabs = document.querySelectorAll('.product-tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
            }
        }
    });
});

// Optional: Lightbox functionality for images
document.querySelectorAll('.instagram-post').forEach(post => {
    post.addEventListener('click', function(e) {
        if (!e.target.closest('a')) {  // Don't trigger if clicking on a link
            const imgSrc = this.querySelector('img').src;
            // In a real implementation, you would open a lightbox here
            console.log('Opening lightbox for:', imgSrc);
            
            // Example: Redirect to Instagram (would replace with lightbox in production)
            window.open('https://instagram.com/fourayoebeauty', '_blank');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loadWidget = () => {
    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.defer = true;
    document.body.appendChild(script);
    };

    // Auto-refresh setiap 1 jam (3600000 ms)
    loadWidget();
    setInterval(() => {
    const widget = document.querySelector('.elfsight-app-e509fc75-c880-49e5-8978-046cf794942c');
    if (widget) widget.innerHTML = '';
    loadWidget();
    }, 3600000);
});

const counters = document.querySelectorAll('.count');

    const options = {
    threshold: 0.7,
    };

    const countUp = (counter) => {
    const target = +counter.getAttribute('data-target');
      const speed = 800; // smaller = faster

    const update = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
        counter.innerText = current + increment;
        requestAnimationFrame(update);
        } else {
        counter.innerText = target + (counter.dataset.target === "24" ? "/7" : counter.dataset.target === "5" ? "+" : counter.dataset.target === "50" ? "+" : "%");
        }
    };

    update();
    };

    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
        }
    });
    }, options);

    counters.forEach(counter => {
    observer.observe(counter);
});

let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    

        slides[slideIndex - 1].style.display = "block";  

        setTimeout(showSlides, 4000); // Change image every 5 seconds
    }

document.getElementById('target').textContent = userInput;

  // Jangan tampilkan error detail ke user
    window.onerror = function() {
    document.getElementById('error').textContent = 'Terjadi kesalahan. Silakan coba lagi.';
      return true; // Blok error default
};
