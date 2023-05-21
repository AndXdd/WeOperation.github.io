// Nav Shadow

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        nav.classList.add('nav-scroll'); 
    } else {
        nav.classList.remove('nav-scroll');
    }
});

// Testimonial
        $(".testmonial_slider_area").owlCarousel({
        autoplay: true,
        slideSpeed:1000,
        items : 3,
        loop: true,
        nav:true,
        navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        margin: 30,
        dots: true,
        responsive:{
          320:{
            items:1
          },
          767:{
            items:2
          },
          600:{
            items:2
          },
          1000:{
            items:3
          }
        }
        
      });

// Navbar Responsive

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});