const icons = document.querySelectorAll('.tech-icon img');

icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s ease';
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });
});
// Select the menu button and the nav links
const menuButton = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');

// Toggle the navigation menu on mobile button click
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});
