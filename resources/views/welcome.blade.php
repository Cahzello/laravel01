<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ mix('/css/my-app.css') }}">
</head>
<body>
    <h1>Belajar Laravel</h1>
    {{-- <img src="hatsune_miku.jpg" alt="miku"> --}}

    <div class="container text-center py-5">
        <button id="myPopover" type="button" class="btn btn-lg btn-danger" title="lagi serius..." data-bs-toogle="popover" data-bs-content="Belajar Laravel mix compiling assets!">
            Belajar Laravel
        </button>
    </div>

    <script src="{{ mix('/js/my-app.js') }}">
    </script>
</body>
</html>