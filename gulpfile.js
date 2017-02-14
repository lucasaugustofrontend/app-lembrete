const gulp = require('gulp')
const bs = require('browser-sync')
const sass = require('gulp-sass')
const jshint = require('gulp-jshint')
const stylish = require('jshint-stylish')
const sourcemap = require('gulp-sourcemaps')
const babel = require('gulp-babel')

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

  gulp.watch(['./.html', '!./node_modules'], reload)
  gulp.watch([path.babel], ['babel', reload])
  gulp.watch([path.js], ['lint-js', reload])
})

gulp.task('babel', () => {
  return gulp.src(path.babel)
    .pipe(sourcemap.init())
    .pipe(babel())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('assets/javascripts'))
})
gulp.task('sass', () => {
  return gulp.src(path.sass)
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('assets/stylesheets'))
})

gulp.task('lint-js', () => {
  return gulp.src(path.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
})
gulp.task('gulpfile', () => {
  gulp.src('gulpfile.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
})

gulp.task('default', () => {})

