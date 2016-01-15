<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <link href="../css/bootstrap.css" type="text/css" rel="stylesheet">
    <link href="../css/bootstrap-theme.css" type="text/css" rel="stylesheet">
    <meta charset="UTF-8">
    <script src="http://vk.com/js/api/openapi.js" type="text/javascript" charset="windows-1251"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title></title>
    <style>
        .exam-info {
            font-size: 17.5px;
        }
    </style>
    <script>

    </script>

</head>
<body class="container-fluid">
<div class="row">
    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 exam-info">
        <p>${model.exam.country} / ${model.exam.city} / ${model.exam.university} / ${model.exam.faculty}</p>
        <p>Преподаватель: <strong>${model.exam.teacherSurname} ${model.exam.teacherName} ${model.exam.teacherMiddleName}</strong></p>
        <p>Предмет: <strong>${model.exam.subject}</strong></p>
        <p>Семестр: <span class="label label-default">${model.exam.course}</span></p>
        <p><span class="label label-info">${model.exam.type}</span></p>
    </div>
</div>
<div class="row">
    <div id="vk_comments"></div>
</div>
<script type="text/javascript">
    VK.init({
        apiId: 5034660,
        onlyWidgets: true
    });
    VK.Widgets.Comments('vk_comments', {
        pageUrl: 'lol.com'
    }, 'test');
</script>
</body>
</html>
