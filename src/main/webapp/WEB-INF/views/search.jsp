<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head lang="ru">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="resources/css/bootstrap.css" type="text/css" rel="stylesheet">
    <link href="resources/css/bootstrap-theme.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="resources/js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="resources/js/bootstrap.js"></script>
    <title>How To Pass</title>
    <style>
        .htp-search {
            text-align: center;
            padding: 20px;
        }
        .htp-search-options label {
            font-size: larger;
            padding-top: 10px;
        }
    </style>
</head>
<body class="container-fluid">
    <form action="search.html" method="post">
        <div class="row htp-search-options">
            <div class="col-xs-12 col-md-4">
                <label for="country">Страна:</label>
                <select class="form-control" id="country" required>
                    <option>Беларусь</option>
                    <option>Россия</option>
                </select>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="city">Город:</label>
                <select class="form-control" id="city" required>
                    <option>Минск</option>
                    <option>Гомель</option>
                    <option>Могилёв</option>
                    <option>Витебск</option>
                    <option>Брест</option>
                    <option>Годно</option>
                </select>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="university">Учебное заведение:</label>
                <select class="form-control" id="university" required>
                    <option>Минск</option>
                    <option>Гомель</option>
                    <option>Могилёв</option>
                    <option>Витебск</option>
                    <option>Брест</option>
                    <option>Годно</option>
                </select>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="faculty">Факультет:</label>
                <select class="form-control" id="faculty" required>
                    <option>ФПМИ</option>
                    <option>Физ Фак</option>
                </select>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="teacher_name">Фамилия преподавателя:</label>
                <input type="text" class="form-control" required id="teacher_name"/>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="course">Курс:</label>
                <input type="number" class="form-control" required id="course"/>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="subject">Предмет:</label>
                <input type="text" class="form-control" required id="subject"/>
            </div>
            <div class="col-xs-12 col-md-4">
                <label for="type">Зачёт/Экзамен</label>
                <select class="form-control" required id="type">
                    <option>Зачёт</option>
                    <option>Экзамен</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-xs12 htp-search">
                <button type="submit" class="btn btn-default">Поиск</button>
            </div>
        </div>
    </form>
</body>
</html>