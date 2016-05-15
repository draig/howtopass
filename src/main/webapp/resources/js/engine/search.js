$(function () {

    var engine = {
        searchPage: {
            url: 'http://localhost:8080/howtopass/resources/html/result2.html'
        }
    };

    var country = $('#country').select({
        imageUrl: '../img/country.png',
        placeholder: 'Страна',
        loadUrl: '/howtopass/how-to-pass/country'
    });

    country.select('reload');

    $('#city').select({
        imageUrl: '../img/city.png',
        placeholder: 'Город',
        loadUrl: '/howtopass/how-to-pass/city'
    });

    $('#university').select({
        imageUrl: '../img/university.png',
        placeholder: 'Университет',
        loadUrl: '/howtopass/how-to-pass/university'
    });

    $('#faculty').select({
        placeholder: 'Факультет',
        loadUrl: '/howtopass/how-to-pass/faculty'
    });

    $('#subject').input({
        placeholder: 'Предмет',
        required: true
    });

    $('#semester').select({
        placeholder: 'Семестр',
        type: 'number',
        items: [
            {
                text:'1',
                value: 1
            },
            {
                text:'2',
                value: 2
            },
            {
                text:'3',
                value: 3
            },
            {
                text:'4',
                value: 4
            },
            {
                text:'5',
                value: 5
            },
            {
                text:'6',
                value: 6
            },
            {
                text:'7',
                value: 7
            },
            {
                text:'8',
                value: 8
            },
            {
                text:'9',
                value: 9
            },
            {
                text:'10',
                value: 10
            }
        ]
    });

    $('#subject').input({
        imageUrl: '../img/surname.png',
        placeholder: 'амилия',
        required: true
    });

    $('#surname').input({
        placeholder: 'Фамилия',
        required: true
    });

    $('#type').select({
        placeholder: 'Экзамен/зачёт',
        items: [
            {
                text: 'Зачёт',
                value: 'credit'
            },
            {
                text: 'Экзамен',
                value: 'exam'
            }
        ]
    });

    engine.searchPage.validate = $.proxy(function() {
        var result = [];
        this._block = true;
        result.push(
            $('#country').select('validate'),
            $('#city').select('validate'),
            $('#university').select('validate'),
            $('#faculty').select('validate'),
            $('#semester').select('validate'),
            $('#type').select('validate'),
            $('#subject').input('validate'),
            $('#surname').input('validate')
        );
        delete this._block;
        return $.inArray(false, result) === -1;
    }, engine.searchPage);

    engine.searchPage.value = $.proxy(function() {
        return {
            country: $('#country').select('value').value,
            city: $('#city').select('value').value,
            university: $('#university').select('value').value,
            faculty: $('#faculty').select('value').value,
            semester: $('#semester').select('value').value,
            type: $('#type').select('value').value,
            subject: $('#subject').input('value'),
            surname: $('#surname').input('value')
        }
    }, engine.searchPage);

    engine.searchPage.search = $.proxy(function() {
        if(this.validate()) {
            $.relocate(this.url, this.value());
        }
    }, engine.searchPage);

    $('#search').on('click', function (el, data) {
        engine.searchPage.search();
    });

    $('#country').on('valid', function (el, data) {
        if(!engine.searchPage._block) {
            $('#city').select('empty').select('reload', {country: data.value});
        }
    });
    $('#country').on('disable reload', function (el, data) {
        $('#city').select('empty').select('disable', true);
    });

    $('#city').on('valid', function (el, data) {
        if(!engine.searchPage._block) {
            var country = $('#country').select('value');
            $('#university').select('empty').select('reload', {country: country.value, city: data.value});
            $('#faculty').select('empty').select('disable', true);
        }
    });
    $('#city').on('disable reload', function (el, data) {
        $('#university').select('empty').select('disable', true);
    });

    $('#university').on('valid', function (el, data) {
        if(!engine.searchPage._block) {
            var country = $('#country').select('value');
            var city = $('#city').select('value');
            $('#faculty').select('empty').select('reload', {
                country: country.value,
                city: city.value,
                university: data.value
            });
        }
    });
    $('#university').on('disable reload', function (el, data) {
        $('#faculty').select('empty').select('disable', true);
    });

});