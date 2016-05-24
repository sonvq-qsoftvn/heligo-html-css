jQuery(function ($) {    

    function queryFunction(query) {
        // ['Amsterdam', 'Antwerp', ...]
        var cities = $('#single-select-box').find('option').map(function () {
            return this.textContent;
        }).get();

        // [ { text: 'Austria', children: [ { id: 54, text: 'Vienna' } ] }, ... ]
        var citiesByCountry = $('#multiple-select-box').find('optgroup').map(function () {
            return {
                text: this.getAttribute('label'),
                children: $(this).find('option').map(function () {
                    return {
                        id: parseInt(this.getAttribute('value'), 10),
                        text: this.textContent
                    };
                }).get()
            };
        }).get();

        // [{ id: 'Amsterdam', timezone: '+01:00' }, ...]
        var citiesWithTimezone = $('#multiple-select-box').find('option').map(function () {
            return {
                id: this.textContent,
                timezone: this.getAttribute('data-timezone')
            };
        }).get();

        var transformText = $.fn.selectivity.transformText;
        var selectivity = query.selectivity;
        var term = query.term;
        var offset = query.offset || 0;
        var results;
        if (selectivity.$el.attr('id') === 'single-input-with-submenus') {
            var timezone = selectivity.dropdown.highlightedResult.id;
            results = citiesWithTimezone.filter(function (city) {
                return transformText(city.id).indexOf(transformText(term)) > -1 &&
                        city.timezone === timezone;
            }).map(function (city) {
                return city.id
            });
        } else {
            results = cities.filter(function (city) {
                return transformText(city).indexOf(transformText(term)) > -1;
            });
        }
        results.sort(function (a, b) {
            a = transformText(a);
            b = transformText(b);
            var startA = (a.slice(0, term.length) === term),
                    startB = (b.slice(0, term.length) === term);
            if (startA) {
                return (startB ? (a > b ? 1 : -1) : -1);
            } else {
                return (startB ? 1 : (a > b ? 1 : -1));
            }
        });
        setTimeout(function () {
            query.callback({
                more: results.length > offset + 10,
                results: results.slice(offset, offset + 10)
            });
        }, 500);
    }

    $(function () {
//        $('#multiple-input').selectivity({
//            multiple: true,
//            placeholder: 'Type to search cities',
//            ajax: {
//                url: '//google.com',
//                beforeSend: function () {
//                    alert('heay');
//                },
//                success: function () {
//                    alert('fa');
//                },
//                error: function () {
//                    alert('ádfsadf');
//               }
//            }
//        });
        $('#multiple-input').selectivity({
            multiple: true,
            placeholder: 'Type to search cities',
            query: queryFunction
        });

    });
});
