// Clicking the humburger icon displays the menu
const humburger = document.querySelector('.nav-icon');
humburger.addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'flex';
});

// Hide the menu when close icon is clicked
const close = document.querySelector('.close-icon');
close.addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'none';
});

// Close the menu when menu item is clicked
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});
