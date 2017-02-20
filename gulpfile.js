const gulp = require('gulp')
const bs = require('browser-sync')
const sass = require('gulp-sass')
const jshint = require('gulp-jshint')
const stylish = require('jshint-stylish')
const sourcemap = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const cssmin = require('gulp-clean-css')

const path = {
  babel: ['assets/babel/**/*.js'],
  css: ['assets/stylesheets/**/*.css'],
  js: ['assets/javascripts/**/*.js'],
  sass: ['assets/sass/**/*.scss']
}
const reload = bs.reload

gulp.task('server', () => {
  bs.init({
    server: {
      baseDir: './'
    },
    open: false,
    reloadOnRestart: true,
    logFileChanges: true,
    logPrefix: 'App Lembrete',
    ghostMode: true
  })

  gulp.watch(['index.html', path.css], reload)
  gulp.watch([path.babel], ['babel', reload])
  gulp.watch([path.js], ['lint-js', reload])
  gulp.watch([path.sass], ['sass', reload])
})

gulp.task('babel', () => {
  gulp.src(path.babel)
    .pipe(sourcemap.init())
    .pipe(babel())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('assets/javascripts'))
})
gulp.task('sass', () => {
  gulp.src(path.sass)
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('assets/stylesheets'))
})
gulp.task('cssmin', () => {
  gulp.src(path.css)
    .pipe(sourcemap.init())
    .pipe(cssmin({compatibility: 'ie8'}))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('.'))
})

gulp.task('lint-js', () => {
  gulp.src(path.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
})
gulp.task('gulpfile', () => {
  gulp.src('gulpfile.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
})

gulp.task('default', () => {})
