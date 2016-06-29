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
        .copy('resources/assets/js/app.js', 'public/js/app.js')
        .copy('vendor/bower_components/font-awesome/fonts', 'public/fonts')
        .copy('vendor/bower_components/keyrune/fonts', 'public/fonts');
});
