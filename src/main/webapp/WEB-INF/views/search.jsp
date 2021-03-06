<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="req" value="${pageContext.request}" />
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>HowToPass</title>
    <link href="resources/css/howtopass2.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="resources/js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="resources/js/jquery-ui-core.js"></script>
    <script type="text/javascript" src="resources/js/jquery-ui-widget.js"></script>
    <script type="text/javascript" src="resources/js/utils.js"></script>
    <script type="text/javascript" src="resources/js/widget/input.js"></script>
    <script type="text/javascript" src="resources/js/widget/select.js"></script>
    <script type="text/javascript" src="resources/js/engine/search.js"></script>
    <script>
        $(function() {
            var engine = new Engine();
        });
    </script>
</head>
<body class="htp-app">
<header class="htp-header">
    <span class="htp-header-item" style="width: 250px;"><img src="resources/img/logo.png"/></span>
    <span class="htp-header-item htp-header-item-empty"></span>
    <!--<span class="htp-header-item htp-header-item-btn" style="width: 110px;">
        <img src="../img/search.png"/>
        <span>Поиск</span>
    </span>
    <span class="htp-header-item htp-header-item-btn" style="width: 140px;">
        <img src="../img/add.png"/>
        <span>Добавить</span>
    </span>-->
</header>
<div class="htp-content">
    <div class="htp-filter">
        <div id="country"></div>
        <div id="city"></div>
        <div id="university"></div>
        <div id="faculty"></div>
        <div id="subject"></div>
        <div id="surname"></div>
        <div id="type"></div>
    </div>
    <div class="htp-btn-bar">
        <button id="search">Поиск</button>
    </div>
</div>
</body>
</html>