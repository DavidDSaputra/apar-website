<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO Meta Tags -->
    <title inertia>APAR Bersertifikat SNI | PT Joulwinn Gelvis Hotapea</title>
    <meta name="description"
        content="Distributor APAR berkualitas dengan sertifikasi SNI. Tersedia Dry Chemical Powder, CO2, Foam, Clean Agent, Wet Chemical untuk kantor, pabrik, gudang. Konsultasi gratis & pengiriman seluruh Indonesia.">
    <meta name="keywords"
        content="APAR, alat pemadam api ringan, fire extinguisher, SNI, dry chemical powder, CO2, foam, clean agent, wet chemical, thermatic, Jakarta, Tangerang, Indonesia">
    <meta name="author" content="PT Joulwinn Gelvis Hotapea">
    <meta name="robots" content="index, follow">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="APAR Bersertifikat SNI | PT Joulwinn Gelvis Hotapea">
    <meta property="og:description"
        content="Distributor APAR berkualitas dengan sertifikasi SNI. Tersedia berbagai jenis APAR untuk kantor, pabrik, gudang. Konsultasi gratis!">
    <meta property="og:image" content="{{ asset('images/og-image.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url()->current() }}">
    <meta property="twitter:title" content="APAR Bersertifikat SNI | PT Joulwinn Gelvis Hotapea">
    <meta property="twitter:description"
        content="Distributor APAR berkualitas dengan sertifikasi SNI. Tersedia berbagai jenis APAR untuk kantor, pabrik, gudang.">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">

    <!-- Canonical URL -->
    <link rel="canonical" href="{{ url()->current() }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800,900" rel="stylesheet" />

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body class="antialiased">
    @inertia
</body>

</html>