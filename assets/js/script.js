'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

/*-----------------------------------*\
  #BANNER_IMAGES_SLIDESHOW
\*-----------------------------------*/

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("imgslide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}

// var i = 0;
// var images = [];
// var slideTime = 3000;

// images[0] = './assets/images/hero-bg.jpg';
// images[1] = './assets/images/hero-bg1.jpg';

// function changePicture() 
// {
//   document.body.style.backgroundImage = "url(" + images[i] + ")";

//   if (i < images.length - 1) 
//   {
//    i++;
//   } 
//   else 
//   {
//    i = 0;
//   }
//   setTimeout(changePicture, slideTime);
// }

// window.onload = changePicture;

/*-----------------------------------*\
  #Bikes And Scooters
\*-----------------------------------*/

const divs = document.querySelectorAll('.list-menu');
const containers = document.querySelectorAll('.products');

function showPage(pageId) {
    containers.forEach(products => {
        products.classList.remove('active');
    });

    const page = document.getElementById(pageId);
    page.classList.add('active');
}

divs.forEach(div => {
    div.addEventListener('click', () => {
        const selectedDiv = div.dataset.page;
        showPage(selectedDiv);
    });
});