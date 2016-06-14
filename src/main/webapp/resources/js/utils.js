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

/*
* @options property:
* @queryParams default {}
* @transitQueryParams default false
*
* */
if(!$.relocate) {
    $.relocate = function (url, options) {
        var href = window.location.href, path;
        path = href.substr(0, href.lastIndexOf("/") + 1) + url;
        if(options.transitQueryParams) {
            path += href.substr(href.indexOf("?"));
        }
        if (options.queryParams) {
            window.location.href = path + (path.indexOf('?') === -1 ? '?' : '&') + $.param(options.queryParams);
        } else {
            window.location.href = path
        }

    }
}

if(!$.urlParam) {
    $.urlParam = function (sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
}

if(!RegExp.escape) {
    RegExp.escape = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };
}


