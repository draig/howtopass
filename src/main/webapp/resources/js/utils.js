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
        var path = window.location.href;
        path = path.substr(0, path.lastIndexOf("/") + 1) + url;
        if (queryParams) {
            window.location.href = path + (path.indexOf('?') === -1 ? '?' : '&') + $.param(queryParams);
        } else {
            window.location.href = path
        }

    }
}

if(!RegExp.escape) {
    RegExp.escape = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };
}


