// Nav Shadow

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        nav.classList.add('nav-scroll'); 
    } else {
        nav.classList.remove('nav-scroll');
    }
});