<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Alex Vance | Senior Full Stack & AI Architect') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

        <!-- Dynamic Favicon & SEO -->
        <meta name="description" content="Senior Full Stack & AI Solutions Architect Portfolio. Specializing in high-performance web apps, cloud infrastructure, and AI integration.">
        <meta property="og:title" content="Alex Vance - Portfolio">
        <meta property="og:description" content="Explore my latest projects, technical stack, and career accomplishments.">
        <meta property="og:type" content="website">

        <!-- Scripts & Styles -->
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden min-h-screen">
        @inertia
    </body>
</html>
