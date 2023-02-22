const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */



//
// mix.styles([
//     'resources/css/my-style.css',
//     'resources/css/my-style-h1.css',
//     'resources/css/sikel.css',

// ], 'public/css/my-app.css');

// mix.sass('resources/sass/my-style-h1.scss', 'public/css/my-app.css').version();

mix.scripts([
    'resources/js/bootstrap.bundle.min.js',
    'resources/js/my-script.js',

], 'public/js/my-app.js').version();

mix.styles([
    'resources/css/bootstrap.min.css',
    'resources/css/my-style.css',

], 'public/css/my-app.css').version();

