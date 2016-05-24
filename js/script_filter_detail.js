$(function () {
    $('.carousel').carouFredSel({
        width: $(".slider-container").width(),
        height: $(".slider-container").height(),
        align: false,
        items: {
            visible: 1,
            width: 'variable',
            height: 'variable'
        },
        scroll: {
            fx: "crossfade"
        },
        prev: '.prev-slider',
        next: '.next-slider',
        'pagination': '.pager-slider'
    });

    $(window).resize(function () {
        var newCss = {
            width: $('.slider-container').width(),
            height: $('.slider-container').height()
        };
        $('.carousel').css('width', newCss.width * 4);
        $('.carousel').parent().css(newCss);
        $('.carousel div.slide').css(newCss);
    }).resize();
    
});
