$.widget( "howtopass.input", {

    options: {
        required: false
    },

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

    _hookEventListeners: function () {
        var scope = this;
        $('input', this.element)
            .blur(function() {
                scope.validate()
            })
            .focus(function() {
                scope._clear();
            });
        return this;
    },

    _clear: function() {
        this.element
            .removeClass('htp-filter-input-error');
        return this;
    },

    validate: function () {
        var value = $('input', this.element).val();
        if(this.options.required) {
            if(!value){
                this.element.addClass('htp-filter-input-error');
                return false;
            }
        }
        return true;
    }
});