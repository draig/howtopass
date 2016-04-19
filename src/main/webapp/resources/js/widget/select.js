$.widget( "howtopass.select", {

    // Default options.
    options: {
        items: [],
        imageUrl: '',
        placeholder: ''
    },

    //
    template:   '<div class="htp-filter-input-body">' +
                    '<img class="htp-filter-input-icon" style="display: none;" src=""/>' +
                    '<div class="htp-filter-input-field-wrapper">' +
                    '<input class="htp-filter-input-field" type="text" name="university" placeholder="">' +
                    '</div>' +
                '</div>',

    dropdownTemplate:   '<div class="htp-filter-dropdown" style="display: none;">' +
                            '<ul>' +
                                '<il>Минск</il>' +
                                '<il>Гомель</il>' +
                            '</ul>' +
                        '</div>',

    _create: function() {
        this.element
            .html(this.template)
            .addClass('htp-filter-input')
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
        this._hookEventListeners();

    },

    _hookEventListeners: function () {
        var scope = this;
        $('input', this.element).on('input', function() {
            //console.log($(this).val()); // get the current value of the input field.
            var pos = scope.element.find('.htp-filter-input-body').offset();
            pos.top += scope.element.find('.htp-filter-input-body').outerHeight() - 2; // minus bottom border size
            scope.showItemList(pos);
        });
    },

    showItemList: function (pos) {
        this.dropdownElement.offset(pos).show();
    }
});