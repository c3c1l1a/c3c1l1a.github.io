// Clicking the humburger icon displays the menu
const humburger = document.querySelector('.nav-icon');
humburger.addEventListener('click', function () {
  document.querySelector('.mobile-menu').style.display = 'flex';
});

// Hide the menu when close icon is clicked
let close = document.querySelector('.close-icon');
close.addEventListener('click', function () {
  document.querySelector('.mobile-menu').style.display = 'none';
});

// Close the menu when menu item is clicked
let navItems = document.querySelectorAll('.nav-item');
navItems.forEach(function(navItem){
  navItem.addEventListener('click', function(){
    document.querySelector('.mobile-menu').style.display = 'none';
  }); 
});

