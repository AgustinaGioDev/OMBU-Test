document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var closeBtn = slider.querySelector('.close-btn');

    // Function to hide the slider
    function hideSlider() {
        slider.classList.remove('show');
        setTimeout(function() {
            slider.style.display = 'none';
        }, 500);
    }

    // Show slider on anchor click
    document.querySelectorAll('.custom-ancher a').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            var heading = this.textContent;
            slider.querySelector('h2').textContent = heading;

            slider.style.display = 'block';
            setTimeout(function() {
                slider.classList.add('show');
            }, 10);
        });
    });

    // Hide slider when close button is clicked
    closeBtn.addEventListener('click', function() {
        hideSlider();
    });

    // Hide slider when clicking anywhere outside of it
    document.addEventListener('click', function(e) {
        if (!slider.contains(e.target) && !e.target.closest('.custom-ancher')) {
            hideSlider();
        }
    });
});