$.widget( "howtopass.select", {

    // Default options.
    options: {
        options: []
    },

    _create: function() {
        var progress = this.options.value + "%";
        this.element
            .addClass( "htp-select" )
            .text( progress );
    }
});