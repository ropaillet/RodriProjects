//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

//request de posteo al hacer click en el boton de enviar datos de contacto

$('#enviar').click(function(){
    var data = {
    nombre: $("#nombre").val(),
    email: $("#email").val(),
    mensaje: $("#mensaje").val()
    };
    $.ajax({
    type: "POST",
    url: "email.php",
    data: data,
    success: function(){
    $('.success').fadeIn(1000);
}
    });
});
