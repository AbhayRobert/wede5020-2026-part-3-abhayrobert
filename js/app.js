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

});