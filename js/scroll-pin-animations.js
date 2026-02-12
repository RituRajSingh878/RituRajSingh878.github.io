// Scroll-Driven Pin Animation - Sections pin and cards appear one by one
(function() {
  'use strict';

  // Configuration
  const ITEM_ANIMATION_DELAY = 200; // Delay between card animations (ms)
  const SCROLL_THRESHOLD = 0.2; // When to trigger pin (20% visible)
  const PIN_OFFSET = 100; // Offset from top when pinned (px)

  let pinnedSection = null;
  let isPinned = false;
  let animationTimeout = null;
  let scrollLocked = false;

  // Add CSS for pinning
  function addPinStyles() {
    const style = document.createElement('style');
    style.id = 'scroll-pin-styles';
    style.textContent = `
      .section-pin-container {
        position: relative;
        min-height: 100vh;
      }
      
      .section.pinned {
        position: fixed;
        top: 100px;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 100;
        background: white;
        padding: 3em 0;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-height: calc(100vh - 200px);
        overflow-y: auto;
      }
      
      .section.pinned .section-header {
        opacity: 1;
        transform: translateY(0);
      }
      
      .section-pin-spacer {
        height: 0;
        transition: height 0.3s ease;
      }
      
      .section-pin-spacer.active {
        height: calc(100vh - 100px);
      }
      
      /* Prevent body scroll when section is pinned */
      body.section-pinned {
        overflow: hidden;
      }
      
      .section-item.scroll-pin-item {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .section-item.scroll-pin-item.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Smooth scroll behavior */
      html {
        scroll-behavior: smooth;
      }
    `;
    
    if (!document.getElementById('scroll-pin-styles')) {
      document.head.appendChild(style);
    }
  }

  // Initialize scroll pin animations
  function initScrollPinAnimations() {
    addPinStyles();
    
    const sections = document.querySelectorAll('.section');
    
    if (sections.length === 0) {
      return;
    }

    // Wrap each section in a pin container
    sections.forEach((section, index) => {
      // Skip hero section
      if (section.classList.contains('hero-section')) {
        return;
      }

      // Create pin container
      const container = document.createElement('div');
      container.className = 'section-pin-container';
      
      // Create spacer for pinning
      const spacer = document.createElement('div');
      spacer.className = 'section-pin-spacer';
      
      // Wrap section
      const parent = section.parentNode;
      parent.insertBefore(container, section);
      container.appendChild(spacer);
      container.appendChild(section);
      
      // Mark items for scroll animation
      const items = section.querySelectorAll('.section-item');
      items.forEach(item => {
        item.classList.add('scroll-pin-item');
      });
    });

    // Set up intersection observer
    setupIntersectionObserver();
  }

  // Setup intersection observer for scroll-triggered animations
  function setupIntersectionObserver() {
    const sections = document.querySelectorAll('.section:not(.hero-section)');
    
    if (sections.length === 0) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -100px 0px',
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1]
    };

    let currentSection = null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const section = entry.target;
        const container = section.closest('.section-pin-container');
        const spacer = container ? container.querySelector('.section-pin-spacer') : null;
        
        // When section is in viewport center
        if (entry.intersectionRatio >= SCROLL_THRESHOLD && entry.boundingClientRect.top < window.innerHeight / 2) {
          if (currentSection !== section && !isPinned) {
            currentSection = section;
            pinSection(section, spacer);
          }
        }
        
        // When section exits viewport
        if (entry.intersectionRatio < 0.1 && section === pinnedSection) {
          currentSection = null;
          unpinSection(section, spacer);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Also handle scroll events for better control
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollLocked) return;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Check if we should unpin
        if (pinnedSection && isPinned) {
          const rect = pinnedSection.getBoundingClientRect();
          const container = pinnedSection.closest('.section-pin-container');
          const containerRect = container ? container.getBoundingClientRect() : null;
          
          // Unpin if scrolled past the container
          if (containerRect && containerRect.bottom < PIN_OFFSET) {
            unpinSection(pinnedSection, container.querySelector('.section-pin-spacer'));
          }
        }
      }, 50);
    }, { passive: true });
  }

  // Pin a section and animate its items
  function pinSection(section, spacer) {
    if (isPinned && pinnedSection === section) return;
    
    // Unpin previous section if any
    if (isPinned && pinnedSection && pinnedSection !== section) {
      const prevContainer = pinnedSection.closest('.section-pin-container');
      const prevSpacer = prevContainer ? prevContainer.querySelector('.section-pin-spacer') : null;
      unpinSection(pinnedSection, prevSpacer);
    }
    
    isPinned = true;
    pinnedSection = section;
    scrollLocked = true;
    document.body.classList.add('section-pinned');
    
    // Add pinned class
    section.classList.add('pinned');
    if (spacer) {
      spacer.classList.add('active');
    }
    
    // Reset item animations
    const items = getSectionItems(section);
    items.forEach(item => {
      item.classList.remove('animate-in');
    });
    
    // Animate header first
    const header = section.querySelector('.section-header.section-item');
    if (header) {
      header.classList.remove('animate-in');
      setTimeout(() => {
        header.classList.add('animate-in');
      }, 200);
    }
    
    // Animate items one by one
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate-in');
      }, 400 + (index * ITEM_ANIMATION_DELAY));
    });
    
    // Unlock scroll after animations
    const totalAnimationTime = 400 + (items.length * ITEM_ANIMATION_DELAY) + 300;
    setTimeout(() => {
      scrollLocked = false;
    }, totalAnimationTime);
  }

  // Unpin a section
  function unpinSection(section, spacer) {
    if (!section || (pinnedSection && section !== pinnedSection)) return;
    
    section.classList.remove('pinned');
    if (spacer) {
      spacer.classList.remove('active');
    }
    
    document.body.classList.remove('section-pinned');
    isPinned = false;
    pinnedSection = null;
    scrollLocked = false;
    
    if (animationTimeout) {
      clearTimeout(animationTimeout);
      animationTimeout = null;
    }
  }

  // Get items in a section (same logic as sequential animations)
  function getSectionItems(section) {
    const items = [];
    
    // GitHub contributions chart
    const contributionsChart = section.querySelector('.github-contributions.section-item');
    if (contributionsChart) {
      items.push(contributionsChart);
    }
    
    // About cards
    const aboutCards = section.querySelectorAll('.about-card.section-item');
    if (aboutCards.length > 0) {
      aboutCards.forEach(card => items.push(card));
      return items;
    }
    
    // GitHub stats
    const githubStats = section.querySelectorAll('#github-profile .section-item');
    if (githubStats.length > 0) {
      githubStats.forEach(stat => items.push(stat));
      return items;
    }
    
    // Generic section items
    const genericItems = section.querySelectorAll('.section-item:not(.section-header)');
    if (genericItems.length > 0) {
      genericItems.forEach(item => {
        if (!items.includes(item)) {
          items.push(item);
        }
      });
    }
    
    return items;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initScrollPinAnimations, 500);
    });
  } else {
    setTimeout(initScrollPinAnimations, 500);
  }

  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (pinnedSection) {
        unpinSection(pinnedSection, pinnedSection.closest('.section-pin-container')?.querySelector('.section-pin-spacer'));
      }
    }, 250);
  });

})();

