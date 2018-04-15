let mix = require('laravel-mix');

mix
  .sass('src/css/app.scss', 'build/css')
  .js('src/js/app.js', 'build/js')
  .copy('src/index.html', 'build')
  .setPublicPath('build')
  .browserSync({
      proxy: 'http://occhio.test',
      browser: "google chrome"
  });
