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
    html,
    body,
    #index {
        height: 100%;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: 'Exo 2', sans-serif;
        position: relative;

    }

    .full-page-loader {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .loading {
        border-radius: 50%;
        border: 1px solid black;
        animation: 1.3s infinite growing;
        position: absolute;
        opacity: 0;
    }


    @keyframes growing {
        0% {
            width: 50px;
            height: 50px;
            opacity: 1;
        }

        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
</style>

<body>
    <div id="index">

        <div class="full-page-loader">
            <div class="loading"></div>
        </div>

        <script src="{{mix('js/app.js')}}"></script>
    </div>
</body>



</html>