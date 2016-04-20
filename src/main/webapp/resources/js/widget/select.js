$.widget( "howtopass.select", {

    // Default options.
    options: {
        items: [],
        imageUrl: '',
        placeholder: ''
    },

    value: '',

    template:   '<div class="htp-filter-input-body">' +
                    '<img class="htp-filter-input-icon" style="display: none;" src=""/>' +
                    '<div class="htp-filter-input-field-wrapper">' +
                        '<input class="htp-filter-input-field" type="text" name="university" placeholder="">' +
                    '</div>' +
                    '<div class="htp-filter-input-dropdown"></div>'+
                '</div>',

    dropdownTemplate:   '<div class="htp-filter-dropdown" style="display: none;">' +
                            '<div class="htp-filter-no-result-found htp-filter-dropdown-item" style="display: none;">Ничего не найдено</div>' +
                            '<ul/>' +
                        '</div>',

    dropdownItemTemplate: '<li class="htp-filter-dropdown-item htp-filter-dropdown-item-visible" value="#{value}">#{text}</li>',

    _create: function() {
        this.element
            .html(this.template)
            .addClass('htp-filter-input htp-filter-select')
            .find('input')
            .attr('placeholder', this.options.placeholder);
        this.dropdownElement = $(this.dropdownTemplate)
            .appendTo('body');
        if(this.options.imageUrl) {
            this.element
                .addClass('htp-filter-input-with-img')
                .find('.htp-filter-input-icon')
                .attr('src', this.options.imageUrl)
                .show();
        }
        var scope = this;
        $.each(this.options.items, function(index, item) {
            $.tmpl(scope.dropdownItemTemplate, item).appendTo(scope.dropdownElement.find('ul'));
        });
        this._hookEventListeners();
    },

    setText: function(text) {
        console.log('setText');
        if(text) {
            $('input', this.element).val(text);
            for(var i = 0; i < this.options.items.length; ++i) {
                if(this.options.items[i].text === text) {
                    this.element.addClass('htp-filter-input-accept');
                    return;
                }
            }
            this.element.addClass('htp-filter-input-error');
        }

    },

    _hookEventListeners: function () {
        var scope = this;
        $('input', this.element)
            .on('input', function() {
                console.log('input'); //ToDo: add logs
                scope.showDropDown();
            })
            .blur(function() {
                scope._blureTimeout = setTimeout($.proxy(function() {
                    console.log('blur'); //ToDo: add logs
                    scope.dropdownElement.hide();
                    scope
                        ._clear()
                        .setText($(this).val());
                }, this), 1000)

            });
        $('li', this.dropdownElement).on('click', function() {
            console.log('li click'); //ToDo: add logs
            clearTimeout(scope._blureTimeout);
            scope.setText($(this).text());
            scope.dropdownElement.hide();
        });
        $('.htp-filter-input-dropdown', this.element).on('click', function() {
            console.log('dropdown click'); //ToDo: add logs
            clearTimeout(scope._blureTimeout);
            $('input', scope.element).focus();
            if(!scope.dropdownElement.is(":visible")) {
                scope.showDropDown();
            }
        });

        return this;
    },

    _filterDropdownValue: function (searchValue) {
        var regexp = new RegExp(RegExp.escape(searchValue), 'i');
        this.dropdownElement
            .find('li')
            .addClass('htp-filter-dropdown-item-hidden')
            .filter(function (index, el) {
                return regexp.test($(el).text());
            })
            .removeClass('htp-filter-dropdown-item-hidden');
        return this;
    },

    _clear: function() {
        this.element
            .removeClass('htp-filter-input-error')
            .removeClass('htp-filter-input-accept');
        return this;
    },

    _checkNoResult: function() {
        if(!this.dropdownElement.find('li').not('.htp-filter-dropdown-item-hidden').length) {
            this.dropdownElement.find('.htp-filter-no-result-found').show();
        } else {
            this.dropdownElement.find('.htp-filter-no-result-found').hide();
        }
        return this;
    },

    showDropDown: function() {
        this
            ._clear()
            ._filterDropdownValue($('input', this.element).val())
            ._checkNoResult()
            ._showDropdown();
    },

    _showDropdown: function () {
        var pos = this.element.find('.htp-filter-input-body').offset();
        pos.top += this.element.find('.htp-filter-input-body').outerHeight() - 2; // minus bottom border size
        this.dropdownElement.show().offset(pos);
        return this;
    }
});