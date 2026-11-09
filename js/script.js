document.addEventListener('DOMContentLoaded', function () {
   /* Phantom Recipes - script.js 
    Site-wide interactive behaviour used on every page.
    Features: mobile navigation toggle, hero search redirect,
    and a keyboard-accessible skip link.*/

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
    
    /* home search 
    Lets a visitor jump straight to a matching category page. */
    var searchBtn = document.querySelector('.search-box button');
    var searchInput = document.querySelector('.search-box input');
    if (searchBtn && searchInput) {
        var runSearch = function () {
            var term = searchInput.value.trim().toLowerCase();
            if (!term) {
                searchInput.focus();
                return;
            }
            var map = {
                breakfast: 'breakfast.html',
                lunch: 'lunch.html',
                dinner: 'dinner.html',
                dessert: 'dessert.html',
                sweet: 'dessert.html',
                snack: 'quick.html',
                quick: 'quick.html'
            };
            var target = null;
            Object.keys(map).forEach(function (key) {
                if (term.indexOf(key) !== -1) { target = map[key]; }
            });
            // Fall back to the gallery, passing the term so results filter.
            window.location.href = target || ('gallery.html?search=' + encodeURIComponent(term));
        };
        searchBtn.addEventListener('click', runSearch);
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { runSearch(); }
        });
    }

    /* Interactive, progressive disclosure keeps the page tidy and improves UX. */
    var questions = document.querySelectorAll('.faq-question');
    questions.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var answer = btn.nextElementSibling;
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            if (answer) { answer.classList.toggle('open'); }
        });
    });

});