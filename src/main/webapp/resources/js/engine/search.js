$(function () {

    var country = $('#country').select({
        imageUrl: '../img/country.png',
        placeholder: 'Страна',
        loadUrl: '/howtopass/how-to-pass/country'
    });

    $('#country').on('valid', function (el, data) {
        $('#city').select('empty').select('reload', {country: data.value});
    });
    country.select('reload');

    $('#city').select({
        imageUrl: '../img/city.png',
        placeholder: 'Город',
        loadUrl: '/howtopass/how-to-pass/city'
    });

    $('#city').on('valid', function (el, data) {
        var country = $('#country').select('value');
        $('#university').select('empty').select('reload', {country: country.value, city: data.value});
        $('#faculty').select('empty').select('disable', true);
    });
    $('#city').on('disable', function (el, data) {
        $('#university').select('empty').select('disable', true);
    });

    $('#university').select({
        imageUrl: '../img/university.png',
        placeholder: 'Университет',
        loadUrl: '/howtopass/how-to-pass/university'
    });

    $('#university').on('valid', function (el, data) {
        var country = $('#country').select('value');
        var city = $('#city').select('value');
        $('#university').select('empty').select('reload', {country: country.value, city: city.value, university: data.value});
    });
    $('#university').on('disable', function (el, data) {
        $('#faculty').select('faculty').select('disable');
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
        placeholder: 'Курс',
        type: 'number',
        items: [
            {
                text:'1',
                value: 1
            },
            {
                text:'1',
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

});