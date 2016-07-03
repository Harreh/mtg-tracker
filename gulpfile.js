var elixir = require('laravel-elixir');
require('laravel-elixir-bowerbundle');

elixir(function(mix) {
    mix.sass('app.scss')
        .copy(
            'vendor/bower_components/jquery/dist/jquery.js',
            'public/js/jquery.js'
        )
        .copy(
            'vendor/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'public/js/bootstrap.js'
        )
        .copy('vendor/bower_components/knockout/dist/knockout.debug.js', 'public/js/knockout.js')
        .copy('vendor/bower_components/bootstrap-select/js/bootstrap-select.js', 'public/js/bootstrap-select.js')
        .copy('node_modules/bootbox/bootbox.js', 'public/js/bootbox.js')
        .copy('vendor/bower_components/js-cookie/src/js.cookie.js', 'public/js/js.cookie.js')
        .copy('resources/assets/js/app.js', 'public/js/app.js')
        .copy('vendor/bower_components/font-awesome/fonts', 'public/fonts')
        .copy('vendor/bower_components/keyrune/fonts', 'public/fonts');
});
