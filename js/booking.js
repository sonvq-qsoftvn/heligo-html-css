$(function () {
    $(".choose-date").click(function (e) {
        e.preventDefault();
        $(".date-booking").removeClass('hidden');
    });

    $(".hour-picker, .list-select").on('click', 'li', function () {
        $(".hour-picker li, .list-select li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".hour-picker").on('click', 'li', function () {
        $(".hour-picker li").removeClass("active");
        $(this).addClass("active");
    });

    $('.datetimepicker').datetimepicker({
        inline: true,
        sideBySide: false,
        format: 'd.m.Y',
        locale: 'fr',
        viewMode: 'days',
        daysOfWeekDisabled: [0, 6],
        allowInputToggle: false
    }).on('dp.change', function () {
        $(".hour-picker").removeClass('hidden');
    });

});
