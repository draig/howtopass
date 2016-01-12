var HowToPass = {

    emptyOption: '<option selected disabled style="display: none"></option>',

    init: function() {
        this.render();
        this.hook();
    },

    render: function() {
        this.countrySelect = $('select#country');
        this.citySelect = $('select#city');
        this.universitySelect = $('select#university');

        this.countrySelect.append(this.emptyOption);
        HowToPass.data.countries.forEach(function(country){
            this.countrySelect.append('<option value="' + country.value + '">' + country.name + '</option>');
        }.bind(this));
    },

    hook: function() {
        var scope = this;
        this.countrySelect.change(function(value) {
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
        });
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
                name: 'Минск',
                value: 'minsk'
            }
        ]
    }
};