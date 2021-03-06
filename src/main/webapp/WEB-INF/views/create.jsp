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
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>HowToPass</title>
    <script>
        $(function() {
            HowToPass.init();
        });
    </script>
</head>
<body class="container">
<div class="htp-content">
    <form action="create" method="post">
        <div class="row htp-search-options">
            <input type="hidden" name="country" id="country" value="belarus">
            <input type="hidden" name="city" value="minsk">
            <input type="hidden" name="university" value="bsu">
            <div class="col-xs-12 col-md-4 htp-readonly-field">
                <span>Страна: </span><strong>Беларусь</strong>
            </div>
            <div class="col-xs-12 col-md-4 htp-readonly-field">
                <span>Город: </span><strong>Минск</strong>
            </div>
            <div class="col-xs-12 col-md-4 htp-readonly-field">
                <span>Учебное заведение: </span><strong>БГУ</strong>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="faculty">Факультет:</label>
                <select class="form-control" id="faculty" name="faculty">
                </select>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="teacherSurname">Фамилия преподавателя:</label>
                <input type="text" class="form-control" required id="teacherSurname" name="teacherSurname"/>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="course">Семестр:</label>
                <input type="number" class="form-control" required id="course" name="course"/>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="subject">Предмет:</label>
                <input type="text" class="form-control" required id="subject" name="subject"/>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="type">Зачёт/Экзамен</label>
                <select class="form-control" id="type" name="type">
                    <option value="1">Экзамен</option>
                    <option value="2">Зачёт</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-xs12 htp-search">
                <button type="submit" id="search" class="btn btn-default">Создать</button>
            </div>
        </div>
    </form>
</div>
</body>
</html>