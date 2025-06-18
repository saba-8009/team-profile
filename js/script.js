// Adjust layout for small screens
function adjustCardLayout() {
    const container = document.querySelector('.team-container');
    if (window.innerWidth < 600) {
      container.style.flexDirection = 'column';
      container.style.alignItems = 'center';
    } else {
      container.style.flexDirection = 'row';
      container.style.alignItems = 'stretch';
    }
  }
  
  window.addEventListener('load', adjustCardLayout);
  window.addEventListener('resize', adjustCardLayout);
  
  // Optional hover effect with JS
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    });
  });
  