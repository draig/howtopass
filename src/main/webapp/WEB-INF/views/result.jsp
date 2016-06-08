<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>HowToPass</title>
    <link href="resources/css/howtopass2.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="resources/js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="resources/js/jquery-ui-core.js"></script>
    <script type="text/javascript" src="resources/js/jquery-ui-widget.js"></script>
    <script type="text/javascript" src="resources/js/utils.js"></script>
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
    <div class="htp-result-info">
        <div class="htp-field-wrapper">
            <div class="htp-field">
                <span class="htp-field-label">
                    <img src="resources/img/location.png"  title="Город, страна"/>
                </span>
                <span class="htp-field-value">${city}, ${country}</span>
            </div>
        </div>
        <div class="htp-field-wrapper">
            <div class="htp-field">
                <span class="htp-field-label">
                    <img src="resources/img/university.png" title="Университет"/>
                </span>
                <span class="htp-field-value">${university}</span>
            </div>
        </div>
        <div class="htp-field-wrapper" style="width: 100%;">
            <div class="htp-field" style="width: 900px;">
                <span class="htp-field-value">${faculty}</span>
            </div>
        </div>
    </div>
    <div class="result-panel">
        <p>Ничего не нашли? Тогда создейте в один клик!</p>
        <button>Создать</button>
    </div>
    <div class="htp-results">
        <c:forEach items="${exams}" var="exam">
            <div class="htp-result-item-wrapper">
                <div class="htp-result-item">
                    <div class="htp-field">
                        <span class="htp-field-label">Предмет:</span>
                        <span class="htp-field-value">${exam.subject}</span>
                    </div>
                    <div class="htp-field">
                        <span class="htp-field-label">Преподаватель:</span>
                        <span class="htp-field-value">${exam.teacherSurname}</span>
                    </div>
                    <div class="htp-field">
                        <span class="htp-field-value htp-type-${exam.type.id}">${exam.type.name}</span>
                    </div>
                    <div class="htp-btn-bar htp-feedback-btn">
                        <a class="button" href="feedback?id=${exam.id}">Перейти</a>
                    </div>
                </div>
            </div>
        </c:forEach>
    </div>
</div>
</body>
</html>