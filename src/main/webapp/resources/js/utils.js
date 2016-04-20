if(!$.tmpl) {
    $.tmpl = function (templateString, data) {
        if(typeof templateString !== 'string') {
            throw "illegal type of templateString!";
        }
        $.each(data, function(prop, value) {
            templateString = templateString.replace(new RegExp('#{' + prop + '}', 'g'), value);
        });
        return $(templateString);
    }
}

if(!RegExp.escape) {
    RegExp.escape = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };
}


