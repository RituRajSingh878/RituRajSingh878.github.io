// Sequential Section Animations - Items appear one by one, then move to next section
(function() {
  'use strict';

  // Animation configuration
  const ITEM_DELAY = 200; // Delay between items in a section (ms)
  const SECTION_DELAY = 400; // Delay before starting next section (ms)

  // Initialize animations when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Add initial hidden state styles
    const style = document.createElement('style');
    style.textContent = `
      .section-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.7s ease-out, transform 0.7s ease-out;
      }
      
      .section-item.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      .section-header.section-item {
        opacity: 0;
        transform: translateY(20px);
      }
      
      .section-header.section-item.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Start sequential animation
    animateSectionsSequentially();
  });

  function animateSectionsSequentially() {
    const sections = document.querySelectorAll('.section');
    
    if (sections.length === 0) return;

    let currentDelay = 500; // Initial delay before first section

    sections.forEach((section, sectionIndex) => {
      // Get all items in this section
      const items = getSectionItems(section);
      
      if (items.length === 0) return;

      // Animate section header first (if exists)
      const sectionHeader = section.querySelector('.section-header');
      if (sectionHeader) {
        sectionHeader.classList.add('section-item');
        setTimeout(() => {
          sectionHeader.classList.add('animate-in');
        }, currentDelay);
        currentDelay += ITEM_DELAY;
      }

      // Animate items one by one
      items.forEach((item, itemIndex) => {
        setTimeout(() => {
          item.classList.add('animate-in');
        }, currentDelay);
        currentDelay += ITEM_DELAY;
      });

      // Add delay before next section starts
      currentDelay += SECTION_DELAY;
    });
  }

  function getSectionItems(section) {
    const items = [];
    
    // About cards
    const aboutCards = section.querySelectorAll('.about-card.section-item');
    if (aboutCards.length > 0) {
      aboutCards.forEach(card => items.push(card));
      return items;
    }
    
    // GitHub stats (will be added dynamically)
    const githubStats = section.querySelectorAll('#github-profile .section-item');
    if (githubStats.length > 0) {
      githubStats.forEach(stat => items.push(stat));
      return items;
    }
    
    // Skill categories
    const skillCategories = section.querySelectorAll('.skill-category');
    if (skillCategories.length > 0) {
      skillCategories.forEach(cat => {
        cat.classList.add('section-item');
        items.push(cat);
      });
      return items;
    }
    
    // Experience items
    const expItems = section.querySelectorAll('.exp-item');
    if (expItems.length > 0) {
      expItems.forEach(item => {
        item.classList.add('section-item');
        items.push(item);
      });
      return items;
    }
    
    // Project cards
    const projectCards = section.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
      projectCards.forEach(card => {
        card.classList.add('section-item');
        items.push(card);
      });
      return items;
    }
    
    // Article cards
    const articleCards = section.querySelectorAll('.article-card');
    if (articleCards.length > 0) {
      articleCards.forEach(card => {
        card.classList.add('section-item');
        items.push(card);
      });
      return items;
    }
    
    return items;
  }

  // Handle dynamically loaded GitHub stats
  const originalFetch = window.fetch;
  const githubProfileContainer = document.getElementById('github-profile');
  
  if (githubProfileContainer) {
    // Watch for changes in GitHub profile container
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
          // New items added, animate them
          const newItems = githubProfileContainer.querySelectorAll('.section-item:not(.animate-in)');
          if (newItems.length > 0) {
            // Find which section this is
            const section = githubProfileContainer.closest('.section');
            if (section && !section.classList.contains('github-animated')) {
              section.classList.add('github-animated');
              
              // Get delay based on previous sections
              let delay = 500;
              const allSections = document.querySelectorAll('.section');
              let foundCurrent = false;
              
              allSections.forEach(s => {
                if (s === section) {
                  foundCurrent = true;
                } else if (!foundCurrent) {
                  const items = getSectionItems(s);
                  delay += (items.length * ITEM_DELAY) + SECTION_DELAY;
                }
              });
              
              // Animate GitHub stats
              newItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-in');
                }, delay + (index * ITEM_DELAY));
              });
            }
          }
        }
      });
    });
    
    observer.observe(githubProfileContainer, {
      childList: true,
      subtree: true
    });
  }
})();

