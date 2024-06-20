document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function(e) {
        e.preventDefault();
        scrollToTop(0, 600);
    });

    function scrollToTop(to, duration) {
        var start = window.pageYOffset,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function() {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
});
