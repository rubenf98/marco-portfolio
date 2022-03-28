<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ff0000">
    <meta name="theme-color" content="#ffffff">

    <meta name="keywords"
        content="Estofador,estofador de sofas,estofador sofás, estofador madeira, estofador cadeiras,criatividade,decoração,decoracao,Produção,Producao,estofador auto,decoração sala,decoração quarto,decoração de interiores,lojas de decoração, marco abreu,marco,abreu">
    <meta name="author" content="Rúben Freitas">
    <meta name="description"
        content="Trabalho desde o processo de escolha de cores, estilos de decoração, materiais e acessórios para criar novos ambientes e espaços. Se está a pensar abrir, revitalizar ou renovar o seu negócio, eu serei o seu melhor aliado para criar um espaço customizado com tudo aquilo que alguma vez sonhou!">


    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
    <meta name="Description" content="Website description">
    <link rel="stylesheet" href="https://cdnjs.cloudfl&diare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@200;400;700&display=swap" rel="stylesheet">
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
        font-family: 'Sora', sans-serif;
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
        z-index: 10;
    }

    .full-page-loader>img {
        width: 150px;
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
            width: 150px;
            height: 150px;
            opacity: 1;
        }

        100% {
            width: 250px;
            height: 250px;
            opacity: 0;
        }
    }
</style>

<script>
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
</script>

<body>
    <div id="index">

        <div class="full-page-loader">
            <div class="loading"></div>
            <img src="/logo.svg" alt="logo">
        </div>
        <script src="{{mix('js/app.js')}}"></script>

    </div>
</body>



</html>