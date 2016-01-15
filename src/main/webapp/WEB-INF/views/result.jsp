<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <link href="resources/css/bootstrap.css" type="text/css" rel="stylesheet">
    <link href="resources/css/bootstrap-theme.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="resources/js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="resources/js/bootstrap.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title></title>
    <style>

    </style>
</head>
<body class="container-fluid">
<div class="row">
    <div class="alert alert-warning" role="alert">
        <p>Ну удалось найти точного совпадения. Но не огорчайтесь, вы можете создать страницу интересующего
            вас предмета всего за пару минут! Без регистрации и смс.</p>
        <br/>
        <a class="btn btn-warning" href="search?${createQuery}" role="button">Создать</a>
    </div>
</div>

<div class="row">
    <div class="panel panel-default">
        <div class="panel-heading">Похожие отзывы</div>
        <ul class="list-group">
            <c:forEach items="${exams}" var="exam">
                <li class="list-group-item">
                    <p>${exam.country} / ${exam.city} / ${exam.university} / ${exam.faculty}</p>
                    <p>Преподаватель: <strong>${exam.teacherSurname} ${exam.teacherName} ${exam.teacherMiddleName}</strong></p>
                    <p>Предмет: <strong>${exam.subject}</strong></p>
                    <p>Семестр: <span class="label label-default">${exam.course}</span></p>
                    <p><span class="label label-info">${exam.type}</span></p>
                </li>
            </c:forEach>
        </ul>
    </div>
</div>
</body>
</html>
