<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
    <meta name="Description" content="Website description">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500;700&display=swap" rel="stylesheet">
    <title>Marco Abreu | Estofador</title>
</head>

<style>
    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: 'Exo 2', sans-serif;
        position: relative;
    }
</style>

<body>
    <div id="index">
        <script src="{{mix('js/app.js')}}"></script>
    </div>
</body>



</html>