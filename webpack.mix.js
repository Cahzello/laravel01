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

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.scripts([
    'resources/js/my-script.js',
    'resources/js/my-script-console.js',

], 'public/js/my-app.js').version();

//
// mix.styles([
//     'resources/css/my-style.css',
//     'resources/css/my-style-h1.css',
//     'resources/css/sikel.css',

// ], 'public/css/my-app.css');

mix.sass('resources/sass/my-style-h1.scss', 'public/css/my-app.css').version();


