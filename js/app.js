document.addEventListener('DOMContentLoaded', function () {
/* Phantom Recipes - app.js */
    /* Gallery filter & search
       visitors can quickly locate recipe photos by
       category or keyword instead of scrolling the whole collection. 
    */
 
    var grid = document.getElementById('gallery-grid');
    if (grid) {
        var items = Array.prototype.slice.call(grid.querySelectorAll('.gallery-item'));
        var filterBtns = document.querySelectorAll('.filter-btn');
        var searchInput = document.getElementById('gallery-search-input');
        var feedback = document.getElementById('gallery-feedback');
        var activeCategory = 'all';

        function applyFilters() {
            var term = searchInput ? searchInput.value.trim().toLowerCase() : '';
            var visible = 0;
            items.forEach(function (item) {
                var cat = item.getAttribute('data-category');
                var text = (item.getAttribute('data-title') || '').toLowerCase();
                var matchCat = (activeCategory === 'all' || cat === activeCategory);
                var matchTerm = (term === '' || text.indexOf(term) !== -1 || cat.toLowerCase().indexOf(term) !== -1);
                if (matchCat && matchTerm) {
                    item.classList.remove('hidden');
                    visible++;
                } else {
                    item.classList.add('hidden');
                }
            });
            if (feedback) {
                if (visible === 0) {
                    feedback.textContent = 'No recipes found' +
                        (term ? ' for "' + term + '"' : '') + '. Try another category or keyword.';
                } else {
                    feedback.textContent = 'Showing ' + visible + ' recipe' +
                        (visible === 1 ? '' : 's') +
                        (activeCategory === 'all' ? '' : ' in ' + activeCategory) +
                        (term ? ' matching "' + term + '"' : '') + '.';
                }
            }
            rebuildLightboxList();
        }

        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                filterBtns.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                activeCategory = btn.getAttribute('data-filter');
                applyFilters();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', applyFilters);
            // Pre-fill from ?search= passed by the home page search box.
            var params = new URLSearchParams(window.location.search);
            if (params.get('search')) {
                searchInput.value = params.get('search');
            }
        }

        /* lightbox */
        var lightbox = document.getElementById('lightbox');
        var lbImg = document.getElementById('lightbox-img');
        var lbCaption = document.getElementById('lightbox-caption');
        var currentList = [];
        var currentIndex = 0;

        function rebuildLightboxList() {
            currentList = items.filter(function (i) { return !i.classList.contains('hidden'); });
        }

        function openLightbox(item) {
            rebuildLightboxList();
            currentIndex = currentList.indexOf(item);
            showCurrent();
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.getElementById('lightbox-close').focus();
        }
        function showCurrent() {
            var item = currentList[currentIndex];
            if (!item) { return; }
            var img = item.querySelector('img');
            lbImg.src = img.getAttribute('data-full') || img.src;
            lbImg.alt = img.alt;
            lbCaption.textContent = item.getAttribute('data-title') + ' \u2014 ' + item.getAttribute('data-category');
        }
        function closeLightbox() {
            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
        }
        function nextImg() { currentIndex = (currentIndex + 1) % currentList.length; showCurrent(); }
        function prevImg() { currentIndex = (currentIndex - 1 + currentList.length) % currentList.length; showCurrent(); }

        if (lightbox) {
            items.forEach(function (item) {
                item.addEventListener('click', function () { openLightbox(item); });
            });
            document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
            document.getElementById('lightbox-next').addEventListener('click', nextImg);
            document.getElementById('lightbox-prev').addEventListener('click', prevImg);
            lightbox.addEventListener('click', function (e) {
                if (e.target === lightbox) { closeLightbox(); }
            });
            document.addEventListener('keydown', function (e) {
                if (!lightbox.classList.contains('open')) { return; }
                if (e.key === 'Escape') { closeLightbox(); }
                if (e.key === 'ArrowRight') { nextImg(); }
                if (e.key === 'ArrowLeft') { prevImg(); }
            });
        }

        applyFilters();
    }

});

/* enquiry submission  */
document.addEventListener('DOMContentLoaded', function () {

    function isEmail(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }
    function setError(el, msg) {
        var box = document.getElementById(el + '-error');
        if (box) { box.textContent = msg || ''; }
    }
    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    /* Submit a Recipe
       Input -> Validation -> Processing -> Response summary.
       Generates a submission reference then presents a confirmation summary. 
    */

    var enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        var feedback = document.getElementById('enquiry-feedback');
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            ['name', 'email', 'recipe-name', 'recipe-category', 
                'recipe-description'].forEach(function (id) { setError(id, ''); });
            feedback.className = 'form-feedback';
            feedback.textContent = '';

            var name = document.getElementById('name').value.trim();
            var email = enquiryForm['email'].value.trim();
            var recipeName = enquiryForm['recipe-name'].value.trim();
            var category = enquiryForm['recipe-category'].value;
            var desc = enquiryForm['recipe-description'].value.trim();

            var ok = true;
            if (!name) { setError('name', 'Please enter your name.'); ok = false; }
            if (!isEmail(email)) { setError('email', 'Please enter a valid email address.'); ok = false; }
            if (!recipeName) { setError('recipe-name', 'Please enter the recipe name.'); ok = false; }
            if (!category) { setError('recipe-category', 'Please choose a category.'); ok = false; }
            if (desc.length < 20) { setError('recipe-description', 'Please add at least 20 characters of detail.'); ok = false; }

            if (!ok) {
                feedback.className = 'form-feedback error';
                feedback.textContent = 'Please correct the highlighted fields before submitting.';
                return;
            }

            // Processing
            var ref = 'PR-' + Date.now().toString().slice(-6);

            var summary = document.getElementById('enquiry-summary');
            summary.innerHTML =
                '<h3>Submission Received \u2714</h3>' +
                '<p>Thank you, ' + escapeHtml(name) + '. Your recipe has been logged. ' +
                'Reference: <span class="ref">' + ref + '</span></p>' +
                '<div class="summary-row"><span>Recipe</span><span>' + escapeHtml(recipeName) + '</span></div>' +
                '<div class="summary-row"><span>Category</span><span>' + escapeHtml(category) + '</span></div>' +
                '<div class="summary-row"><span>Submitted by</span><span>' + escapeHtml(email) + '</span></div>' +
                '<div class="summary-row"><span>Details</span><span class="summary-instructions">' + escapeHtml(desc) + '</span></div>';
            summary.classList.add('show');
            feedback.className = 'form-feedback success';
            feedback.textContent = 'Success! Your recipe summary is shown below.';
            enquiryForm.reset();
            summary.scrollIntoView({ behavior: 'smooth' });
        });
    }

    /* contact form: validate + mailto
       a pre-formatted mailto link and opens the default email site with subject and body populated. */
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        var cFeedback = document.getElementById('contact-feedback');
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            ['name', 'email', 'subject', 'message'].forEach(function (id) { setError(id, ''); });
            cFeedback.className = 'form-feedback';

            var name = document.getElementById('name').value.trim();
            var email = contactForm['email'].value.trim();
            var subject = contactForm['subject'].value.trim();
            var message = contactForm['message'].value.trim();

            var ok = true;
            if (!name) { setError('name', 'Please enter your name.'); ok = false; }
            if (!isEmail(email)) { setError('email', 'Please enter a valid email address.'); ok = false; }
            if (!subject) { setError('subject', 'Please enter a subject.'); ok = false; }
            if (message.length < 10) { setError('message', 'Please enter a longer message.'); ok = false; }

            if (!ok) {
                cFeedback.className = 'form-feedback error';
                cFeedback.textContent = 'Please correct the highlighted fields.';
                return;
            }

            var body = 'Name: ' + name + '\n' +
                       'Email: ' + email + '\n\n' +
                       message + '\n\n-- Sent via the Phantom Recipes contact form';
            var mailto = 'mailto:ST10534638@myemeris.edu.za' +
                '?subject=' + encodeURIComponent('[Contact] ' + subject) +
                '&body=' + encodeURIComponent(body);
            window.location.href = mailto;

            cFeedback.className = 'form-feedback success';
            cFeedback.textContent = 'Opening your email app so you can send the message to our team...';
        });
    }

});