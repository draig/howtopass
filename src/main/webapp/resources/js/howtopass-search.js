var HowToPass = {

    emptyOption: '<option selected disabled style="display: none"></option>',

    init: function() {
        this.render();
        this.hook();
    },

    render: function() {
        //this.countrySelect = $('select#country');
        //this.citySelect = $('select#city');
        //this.universitySelect = $('select#university');
        this.facultySelect = $('select#faculty');

        this.facultySelect.append(this.emptyOption);
        HowToPass.data.faculties.forEach(function(country){
            this.facultySelect.append('<option value="' + country.value + '">' + country.name + '</option>');
        }.bind(this));
    },

    hook: function() {
        var scope = this;
        /*this.countrySelect.change(function(value) {
            scope.citySelect.empty().append(scope.emptyOption);
            HowToPass.data.cities[$(this).val()].forEach(function(city){
                scope.citySelect.append('<option value="' + city.value + '">' + city.name + '</option>');
            });
            scope.citySelect.removeAttr('disabled');
        });

        this.citySelect.change(function(value) {
            scope.universitySelect.empty().append(scope.emptyOption);
            HowToPass.data.cities[$(this).val()].forEach(function(university){
                scope.citySelect.append('<option value="' + university.value + '">' + university.name + '</option>');
            });
            scope.universitySelect.removeAttr('disabled');
        });*/
    },

    _disabledFrom: function(select) {
        switch (select) {
            case 'city':

        }
    }
};

HowToPass.data = {
    countries: [
        {
            name: 'Беларусь',
            value: 'belarus'
        },
        {
            name: 'Россия',
            value: 'russia'
        }
    ],

    cities: {
        belarus: [
            {
                name: 'Минск',
                value: 'minsk'
            },
            {
                name: 'Гомель',
                value: 'gomel'
            }
        ],
        russia: [
            {
                name: 'Москва',
                value: 'moscow'
            }
        ]
    },

    universities: {
        minsk: [
            {
                name: 'БГУ',
                value: 'bsu'
            }
        ]
    },

    faculties: [
        {
            title: 'Биологический факультет',
            id: 'bio'
        },
        {
            title: 'Военный',
            id: 'battle'
        },{
            title: 'Географический',
            id: 'geo'
        },{
            title: 'Институт журналистики',
            id: 'journal'
        },{
            title: 'Исторический',
            id: 'history'
        },{
            title: 'Механико-математический',
            id: 'mmf'
        },{
            title: 'Международных отношений',
            id: 'fmo'
        },{
            title: 'Прикладной математики и информатики',
            id: 'fpmi'
        },{
            title: 'Радиофизики и компьютерных технологий',
            id: 'raf'
        },{
            title: 'Cоциокультурных коммуникаций (Гуманитарный факультет)',
            id: 'humanitarian'
        },{
            title: 'Философии и социальных наук',
            id: 'ffsn'
        },{
            title: 'Физический',
            id: 'physics'
        },{
            title: 'Филологический',
            id: 'fil'
        },{
            title: 'Химический',
            id: 'chemistry'
        },{
            title: 'Экономический',
            id: 'economic'
        },{
            title: 'Юридический',
            id: 'law'
        },{
            title: 'Доуниверситетское образования',
            id: 'pre'
        },
    ]
};