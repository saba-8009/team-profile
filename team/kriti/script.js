console.log("Welcome to kriti's profile page!");

// Animate section reveal
document.querySelectorAll('section').forEach((section, index) => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  setTimeout(() => {
    section.style.transition = 'all 0.6s ease';
    section.style.opacity = 1;
    section.style.transform = 'translateY(0)';
  }, 300 * index);
});