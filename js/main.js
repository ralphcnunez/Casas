function main() {

    (function () {
        'use strict';

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 74
                    }, 900);
                    return false;
                }
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 74
        });

        // Hide nav on click
        $(".navbar-nav li a").click(function (event) {
            // check if window is small enough so dropdown is created
            var toggle = $(".navbar-toggle").is(":visible");
            if (toggle) {
                $(".navbar-collapse").collapse('hide');
            }
        });

        $(document).ready(function () {
            // Testimonial Slider
            $('.owl-carousel').owlCarousel({
                margin: 10,
                loop: true,
                items: 1
            });

            //Bootstrap carousel
            $('#carousel').carousel({
                interval: 4000,
                keyboard: true,
                pause: "hover"
            });
            $('.grid .carousel').carousel({
                interval: false
            });

            //Map
            mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhdmV6Z2FyajE3NTUiLCJhIjoiY2ptaW9iOXl2MDc1MDNwcG1iam1xYWN3YiJ9.0KoeWq7s29S_wI_bPhGw2A';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [-74.0325 ,40.8370],
                zoom: 9,
                interactive: false
            });
        });
    }());
}

function clearText(className) {
    $(className).html("");
}

function clearAll() {
    if ($("input#inputCity").val() === "" && $("input#inputAddress").val() === "" && $("input#inputZip").val() === "") {
        $(".address").html("");
        $(".zip").html("");
        $(".city").html("");
    }
}

main();
