animationsOn = false;

$(document).ready(function () {
    if (animationsOn) setArrowLight();

    // The following variables are defined for my animateNavBar function
    var decoyMenu = $('#jplaceholder');
    var actualMenu = $('#jactual');

    function animateNavBar() {
        if (decoyMenuAtTop(decoyMenu)) {
            actualMenu.show();
            decoyMenu.addClass('invisible');
        } else {
            actualMenu.hide();
            decoyMenu.removeClass('invisible');
        }
    }
    document.onscroll = animateNavBar;

    var halfWayPoint = $(window).height() / 2;
    $('body').scrollspy({
        target: '#sideContentAnchor'
        , offset: halfWayPoint
    });

})

function decoyMenuAtTop(decoyMenu) {
    var fixpoint = decoyMenu.offset().top;
    return $(window).scrollTop() >= fixpoint;
}

function setArrowLight() {
    var fadeTime = 800;

    $('#jscroll').delay(5000).fadeIn(400, function () {
        setInterval(function () {
            $('#jscroll').fadeOut(fadeTime);
            $('#jscroll').fadeIn(fadeTime);
        }, fadeTime / 2)
    })
}