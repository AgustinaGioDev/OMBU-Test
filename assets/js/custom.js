document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.custom-border li a');
    var slideInContent = document.getElementById('slide-in-content');
    var closeButton = document.getElementById('close-button');

    // Show slide-in content when a menu item is clicked
    menuItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            slideInContent.classList.add('show');
            slideInContent.classList.remove('fade-out');
        });
    });

    // Close slide-in content when the close button is clicked
    closeButton.addEventListener('click', function () {
        slideInContent.classList.add('fade-out');
        setTimeout(function() {
            slideInContent.classList.remove('show');
            slideInContent.classList.remove('fade-out');
        }, 300); // Match the duration of the CSS transition
    });

    // Close slide-in content when clicking outside
    document.addEventListener('click', function (e) {
        if (!slideInContent.contains(e.target) && !e.target.closest('.custom-border')) {
            slideInContent.classList.add('fade-out');
            setTimeout(function() {
                slideInContent.classList.remove('show');
                slideInContent.classList.remove('fade-out');
            }, 300); // Match the duration of the CSS transition
        }
    });

    // Prevent body click event when clicking inside the slide-in content
    slideInContent.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});
