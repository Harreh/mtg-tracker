<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <title>MTG Tracker</title>

    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Montserrat" />

    <link href="css/app.css" rel="stylesheet">

</head>
<body id="app-layout">

    @yield('menu')

    @yield('content')

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/knockout.js"></script>
    <script src="js/bootstrap-select.js"></script>
    <script src="js/bootbox.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
