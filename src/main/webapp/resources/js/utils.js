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

if(!$.relocate) {
    $.relocate = function (url, queryParams) {
        window.location.href = url + '?' + $.param(queryParams);
    }
}



if(!RegExp.escape) {
    RegExp.escape = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };
}


