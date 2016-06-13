$.widget( "howtopass.select", {

    // Default options.
    options: {
        items: [],
        imageUrl: '',
        placeholder: '',
        type: "text"
    },

    BORDER_SIZE: 1,

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
        if(this.options.items.length) {
            $.each(this.options.items, function(index, item) {
                $.tmpl(scope.dropdownItemTemplate, item).appendTo(scope.dropdownElement.find('ul'));
            });
        } else {
            this.disable(true);
        }
        $('input', this.element).prop("type", this.options.type);
        this._hookEventListeners();
    },

    setText: function(text) {
        console.log('setText');
        $('input', this.element).val(text || '');
        this.validate();

    },

    /*
    * @options property:
    * @success <function> call if id set correct
    * @error <function> call if id set fail
    * */
    setId: function (id) {
        for(var i = 0; i < this.options.items.length; ++i) {
            if(this.options.items[i].id === id) {
                this.element.addClass('htp-filter-input-accept');
                this._value = this.options.items[i];
                this.element.trigger('valid', this._value);
                return true;
            }
        }
        delete this._value;
        this.element.addClass('htp-filter-input-error');
        return false;
    },

    refresh: function () {

    },

    disable: function (value) {
        this._disabled = !!value;
        $('input', this.element).prop("disabled", !!value);
        this.element[value ? 'addClass' : 'removeClass']('htp-filter-disabled');
        value && this.element.trigger('disable');
    },

    empty: function () {
        this.options.items = [];
        this._value = null;
        $('input', this.element).val('');
        this._clear();
        this.dropdownElement.find('ul').empty();
    },

    reload: function (data) {
        this.element.trigger('reload');
        if(this.options.loadUrl) {
            $.ajax({
                url: this.options.loadUrl,
                type: this.options.loadMethod || "GET",
                data: data || {},
                dataType : "json",
                error : $.proxy(function () {
                    this.element.trigger('loadError');
                }, this),
                success: $.proxy(function (data, textStatus, jqXHR) {
                    var scope = this;
                    $.each(data, function(index, item) {
                        scope.options.items.push(item);
                        $.tmpl(scope.dropdownItemTemplate, item).appendTo(scope.dropdownElement.find('ul'));
                    });
                    this.disable(false);
                    this._clear();
                    this.element.trigger('loadSuccess');
                }, this)
            });
        }
    },

    validate: function () {
        if($('input', this.element).prop("disabled")) {
            return true;
        }
        var text = $('input', this.element).val();
        for(var i = 0; i < this.options.items.length; ++i) {
            if(this.options.items[i].text === text) {
                this.element.addClass('htp-filter-input-accept');
                this._value = this.options.items[i];
                this.element.trigger('valid', this._value);
                return true;
            }
        }
        delete this._value;
        this.element.addClass('htp-filter-input-error');
        return false;
    },

    value: function () {
        return this._value || null;
    },

    _hookEventListeners: function () {
        var scope = this;
        $('input', this.element)
            .on('input', function() {
                console.log('input'); //ToDo: add logs
                scope.showDropDown(true);
            })
            .blur(function() {
                scope._blureTimeout = setTimeout($.proxy(function() {
                    console.log('blur'); //ToDo: add logs
                    scope.dropdownElement.hide();
                    scope
                        ._clear()
                        .setText($(this).val());
                }, this), 400)

            });
        this.dropdownElement.on('click','li', function() {
            console.log('li click'); //ToDo: add logs
            clearTimeout(scope._blureTimeout);
            scope.dropdownElement.hide();
            scope.setText($(this).text());
        });
        $('.htp-filter-input-dropdown', this.element).on('click', function() {
            if(!scope._disabled) {
                console.log('dropdown click'); //ToDo: add logs
                clearTimeout(scope._blureTimeout);
                $('input', scope.element).focus();
                if(!scope.dropdownElement.is(":visible")) {
                    scope.showDropDown();
                } else {
                    scope.dropdownElement.hide()
                }
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

    showDropDown: function(needFilter) {
        this
            ._clear()
            ._filterDropdownValue(needFilter ? $('input', this.element).val() : '')
            ._checkNoResult()
            ._showDropdown();
    },

    _showDropdown: function () {
        var pos = this.element.find('.htp-filter-input-body').offset();
        pos.top += this.element.find('.htp-filter-input-body').outerHeight() - this.BORDER_SIZE; // minus bottom border size
        this.dropdownElement.show().offset(pos);
        return this;
    }
});