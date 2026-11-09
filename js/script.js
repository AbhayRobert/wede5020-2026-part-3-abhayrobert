document.addEventListener('DOMContentLoaded', function () {

    /* Mobile navigation toggle: the site must remain usable on small screens.
       A hamburger button shows/hides the navigation on mobile. */
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }
});