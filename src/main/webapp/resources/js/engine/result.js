var Engine = function (options) {

    var engine = $.extend({
        searchPage: {
            url: 'result'
        }
    }, options || {});

    $('#create').click(function () {
        $.relocate('resources/html/create2.html', {transitQueryParams: true})
    });
    
};