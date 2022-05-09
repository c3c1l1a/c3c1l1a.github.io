//on-click on humburger menu display the menu
let humburger = document.querySelector('.nav-icon');

humburger.addEventListener('click', function () {
  //show the mobile menu
  document.querySelector('.menu').style.display = 'flex';
});

//hide the menu when close icon is clicked
let close = document.querySelector('.close-icon');
close.addEventListener('click', function () {
  document.querySelector('.menu').style.display = 'none';
});

let navItem = document.querySelector('.nav-item');
navItem.addEventListener('click', function(){
  document.querySelector('.menu').style.display = 'none';
});