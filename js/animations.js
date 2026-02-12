// Scroll reveal animations
(function() {
  'use strict';

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Add animation class when element enters viewport
  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.timeline-item, .resume-timeline-item, .cards .card');
    
    elements.forEach(function(element) {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Add initial styles for scroll animations
    const style = document.createElement('style');
    style.textContent = `
      .timeline-item:not(.animated),
      .resume-timeline-item:not(.animated) {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .cards .card:not(.animated) {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
    `;
    document.head.appendChild(style);

    // Handle scroll events
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Check on load
  });
})();

