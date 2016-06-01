$(function () {

    var engine = {
        searchPage: {
            url: 'search'
        }
    };

    var country = $('#country').select({
        imageUrl: 'resources/img/country.png',
        placeholder: 'Страна',
        loadUrl: '/howtopass/options/country'
    });

    country.select('reload');

    $('#city').select({
        imageUrl: 'resources/img/city.png',
        placeholder: 'Город',
        loadUrl: '/howtopass/options/city'
    });

    $('#university').select({
        imageUrl: 'resources/img/university.png',
        placeholder: 'Университет',
        loadUrl: '/howtopass/options/university'
    });

    $('#faculty').select({
        placeholder: 'Факультет',
        loadUrl: '/howtopass/options/faculty'
    });

    $('#subject').input({
        placeholder: 'Предмет',
        required: true
    });

    $('#surname').input({
        placeholder: 'Фамилия',
        required: true
    });

    var type = $('#type').select({
        placeholder: 'Экзамен/зачёт',
        loadUrl: '/howtopass/options/type'
    });

    type.select('reload');

    engine.searchPage.validate = $.proxy(function() {
        var result = [];
        this._block = true;
        result.push(
            $('#country').select('validate'),
            $('#city').select('validate'),
            $('#university').select('validate'),
            $('#faculty').select('validate'),
            $('#type').select('validate'),
            $('#subject').input('validate'),
            $('#surname').input('validate')
        );
        delete this._block;
        return $.inArray(false, result) === -1;
    }, engine.searchPage);

    engine.searchPage.value = $.proxy(function() {
        return {
            facultyId: $('#faculty').select('value').value,
            typeId: $('#type').select('value').value,
            subject: $('#subject').input('value'),
            teacherSurname: $('#surname').input('value')
        }
    }, engine.searchPage);

    engine.searchPage.search = $.proxy(function() {
        if(this.validate()) {
            $.post(this.url, this.value(), function (data) {
                    data.location && (window.location.href = 'http://localhost:8080/howtopass/' + data.location);
                });
            //$.relocate(this.url, this.value());
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