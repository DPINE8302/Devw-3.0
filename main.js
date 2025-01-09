document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Progress Bar and Header Background Toggle on Scroll
    window.addEventListener('scroll', function() {
        scrollProgress();
        toggleHeaderBackground();
        animateSkillBars();
    });

    // Function to update the scroll progress bar
    function scrollProgress() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    }

    // Function to toggle the header background when scrolling
    function toggleHeaderBackground() {
        var header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // Initialize ScrollReveal for elements with the 'fade-in' class
    ScrollReveal().reveal('.fade-in', {
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
        duration: 1000,
        delay: 200,
        reset: false
    });

    // Function to animate skill bars when they come into view
    function animateSkillBars() {
        var skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach(function(bar) {
            if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
                bar.style.width = bar.getAttribute('data-level');
                bar.classList.add('animated');
            }
        });
    }

    // Helper function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
});

