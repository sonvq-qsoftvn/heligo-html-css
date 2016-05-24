$(function () {
    
    $('.trigger-visible-mobile').click(function (event) {
        $('.invisible-mobile').toggleClass('active');
        setTimeout(function () {
            if ($('.invisible-mobile').hasClass('active')) {
                $(".container-scrollable").getNiceScroll().remove();
            } else {
                $(".container-scrollable").niceScroll({
                    autohidemode: false
                });
            }            
        }, 500);
        return false;
    });
    
    setTimeout(function () {
        $(".container-scrollable").niceScroll({
            autohidemode: false
        });
    }, 500);
    
    $('[data-toggle="tooltip"]').tooltip(); 
    
    $('.lines-button').click(function () {
        console.log("vao day");
        $(this).toggleClass('close');
        $(this).next().toggleClass('active');
        return false;
    });
});
