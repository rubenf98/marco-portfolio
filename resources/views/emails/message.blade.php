<!DOCTYPE html>
<html lang="en">

<body>
    <div class="email-container" style="max-width: 600px;width: 90%;margin: auto;display: block;">


        <h1 class="title" style="font-weight: normal;">Email enviado automaticamente após uma nova mensagem no website
            Marco Estofador</h1>
        <div style="font-size: 1em;">
            <span style="font-weigth: bold;">Cliente: </span> {{$user}} {{$email}}
        </div>
        <div class="text" style="font-size: 1em;">
            <span style="font-weigth: bold;">Mensagem: </span> {{$messageContent}}
        </div>
    </div>
</body>

</html>

<style>
    .email-container {
        max-width: 600px;
        width: 90%;
        margin: auto;
        display: block;
    }

    .title {
        font-weight: normal;
    }

    .text {
        font-size: 1em;
    }


    .flex-center {
        display: flex;
        justify-content: center;
    }

    .password-container {
        color: #ff7a5c;
        margin-top: 30px;
        font-size: 1.2em;
        font-weight: bold;
    }

    .warning-container {
        color: gray;
        font-size: .8em;
        margin-bottom: 30px;
    }
</style>