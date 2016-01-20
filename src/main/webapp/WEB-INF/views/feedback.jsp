<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <link href="resources/css/bootstrap.css" type="text/css" rel="stylesheet">
    <link href="resources/css/bootstrap-theme.css" type="text/css" rel="stylesheet">
    <link href="resources/css/howtopass.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="resources/js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="resources/js/bootstrap.js"></script>
    <script type="text/javascript" src="resources/js/howtopass-search.js"></script>
    <meta charset="UTF-8">
    <script src="http://vk.com/js/api/openapi.js" type="text/javascript" charset="windows-1251"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>HowToPass</title>
</head>
<body class="container">
    <div class="htp-content">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 exam-info">
                <p>${exam.country} / ${exam.city} / ${exam.university} / ${exam.faculty}</p>
                <p>Преподаватель: <strong>${exam.teacherSurname} ${exam.teacherName} ${exam.teacherMiddleName}</strong></p>
                <p>Предмет: <strong>${exam.subject}</strong></p>
                <p>Семестр: <span class="label label-default">${exam.course}</span></p>
                <p><span class="label label-info">${exam.type}</span></p>
            </div>
        </div>
        <div class="row">
            <div id="vk_comments"></div>
        </div>
        <script type="text/javascript">
            VK.init({
                apiId: 5235552,
                onlyWidgets: true
            });
            VK.Widgets.Comments('vk_comments', {
                pageUrl: 'http://howtopass-letsgo.rhcloud.com/feedback?id=${exam.id}',
                attach: 'photo,link',
                autoPublish: 0,
                limit: 100
            }, ${exam.id});
        </script>
    </div>
</body>
</html>