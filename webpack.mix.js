const mix = require('laravel-mix')


mix.js('resources/app.js', 'public/app.js')
    .less('resources/styles.less', 'public/style.css')
    .vue({version: 2})
    .sourceMaps(true, 'source-map', 'hidden-nosources-source-map')