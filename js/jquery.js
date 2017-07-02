$(document).ready(function() {
    
    //width of browser in inches
    var dpi_x = document.getElementById('dpi').offsetWidth;
    var widthI = $(this).width() / dpi_x;

    var widthP = $(window).width();
    $(window).resize(function(){
       resize();
    });
    resize();
    
    function resize() {
        if($(this).width() != widthI) {
           widthI = $(this).width() / dpi_x;
        }
        // MOBILE
       if(widthI < 5) {
           $(".hNav_link").hide();
           //window.location.href = "../mobile/";
       }
        // DESKTOP
       if(widthI > 5) {
           $(".hNav_link").show();
       }
    }
    
    // Search homework assignments
    $(".search-hw-button").click(function() {
        var input = document.getElementById('search-hw').value;
        window.location.href = "#" + input;
    });
                                 
});