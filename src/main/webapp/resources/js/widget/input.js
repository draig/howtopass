$.widget( "howtopass.select", {

    value: '',

    template:   '<div class="htp-filter-input-body">' +
                    '<img class="htp-filter-input-icon" style="display: none;" src=""/>' +
                    '<div class="htp-filter-input-field-wrapper">' +
                        '<input class="htp-filter-input-field" type="text" name="university" placeholder="">' +
                    '</div>' +
                '</div>',

    _create: function() {
        this._buildWidget();
        this._hookEventListeners();
        this._postCreate();
    },

    _buildWidget: function() {
        this.element
            .html(this.template)
            .addClass('htp-filter-input')
            .find('input')
            .attr('placeholder', this.options.placeholder);
        if(this.options.imageUrl) {
            this.element
                .addClass('htp-filter-input-with-img')
                .find('.htp-filter-input-icon')
                .attr('src', this.options.imageUrl)
                .show();
        }
    },

    _postCreate: function() {

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

    _clear: function() {
        this.element
            .removeClass('htp-filter-input-error')
            .removeClass('htp-filter-input-accept');
        return this;
    }
});