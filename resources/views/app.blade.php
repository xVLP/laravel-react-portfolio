<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Veronica Louise Piando (xVLP) | Instructor & System Developer') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

        <!-- Dynamic Favicon & SEO -->
        <meta name="description" content="Veronica Louise Piando (xVLP) - Instructor & System Developer. Specializing in Natural Language Processing (NLP), Computer Vision, Deep Learning, Mobile Vision Apps, and Full Stack Web Architectures.">
        <meta property="og:title" content="Veronica Louise Piando (xVLP) - Portfolio">
        <meta property="og:description" content="Explore my repositories, NLP & Computer Vision projects, mobile applications, and software solutions.">
        <meta property="og:type" content="website">

        <!-- Scripts & Styles -->
        @viteReactRefresh
        @vite(['resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-[#F8F6F0] text-[#1F1915] selection:bg-[#70482B] selection:text-white overflow-x-hidden min-h-screen">
        @inertia
    </body>
</html>

