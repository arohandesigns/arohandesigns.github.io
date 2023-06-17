// script.js

// Mobile menu toggle
var menuToggle = document.getElementById('menu-toggle');
var mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Product card hover effect
var productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.classList.add('hover');
  });

  card.addEventListener('mouseleave', function() {
    this.classList.remove('hover');
  });
});
