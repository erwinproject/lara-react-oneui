<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="cisystem dev">
    <meta name="robots" content="index, follow">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="shortcut icon" href="{{ asset('assets/assets/media/favicons/favicon.png')}}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('assets/assets/media/favicons/favicon-192x192.png')}}">
    <link rel="apple-touch-icon" sizes="180x180"
        href="{{ asset('assets/assets/media/favicons/apple-touch-icon-180x180.png')}}">
    <link rel="stylesheet" id="css-main" href="{{ asset('assets/assets/css/oneui.min.css')}}">
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

{{-- <script src="{{ asset('assets/assets/js/oneui.app.min.js')}}"></script> --}}

</html>