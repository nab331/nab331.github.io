$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    console.log(document.location.href.match(/[^\/]+$/)[0]);
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});




//
//z
//
//
//
//
//
//
var speed = 'fast';

$('html, body').hide();

$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
});




///NAV TOGGLE
function NavToggle(x) {
    document.getElementById("hamburger").classList.toggle("change");
    if($('#myNav').css('display') == 'none'){
       $('#myNav').show();
    } else {
       $('#myNav').hide();
    }


}
