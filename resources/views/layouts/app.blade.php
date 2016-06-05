<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>MTG Tracker</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700">

    <link href="css/app.css" rel="stylesheet">

</head>
<body id="app-layout">

    @include('layouts.naviagtion')

    @yield('content')

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/jquery-bracket.min.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
