$(function () {
    $(".slider-range").slider({
        range: true,
        min: 6,
        max: 23,
        values: [8, 20],
        slide: function (event, ui) {
            var tmpstart = ui.values[ 0 ];
            var tmpend = ui.values[ 1 ];
            if (tmpstart < 10) {
                tmpstart = "0" + tmpstart;
            }
            if (tmpend < 10) {
                tmpend = "0" + tmpend;
            }
            $(".time-range").val(tmpstart + ":00" + " - " + tmpend + ":00");
        }
    });
    var tmpFirstStart = $(".slider-range").slider("values", 0);
    var tmpFirstEnd = $(".slider-range").slider("values", 1);
    if (tmpFirstStart < 10) {
        tmpFirstStart = "0" + tmpFirstStart;
    }
    if (tmpFirstEnd < 10) {
        tmpFirstEnd = "0" + tmpFirstEnd;
    }
    $(".time-range").val(tmpFirstStart + ":00" +
            " - " + tmpFirstEnd + ":00");

});
