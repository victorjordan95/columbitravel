var gulp         = require('gulp'),
    connect      = require('gulp-connect'),
    // SASS
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    // JS
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    jshint       = require('gulp-jshint'),
    stylish      = require('jshint-stylish'),
    // GENERAL
    htmlmin      = require('gulp-htmlmin'),
    imagemin     = require('gulp-imagemin'),
    gulpSequence = require('gulp-sequence'),
    clean        = require('gulp-clean');

// PATHS SRC
var paths = {
    html: {
        input:      'app/**/*.html'
    },
    sass: {
        input:      'app/sass/**/*.scss',
        output:     'build/css'
    },
	css: {
        input:      'app/css/**/*.css',
        output:     'build/css'
    },
    cleanJs: {
        output:     'build/js/min/all.min.js',
    },
    js: {
        input:      'app/js/**/*.js',
        output:     'build/js/',
    },
    gif: {
        input:      'app/*.gif',
        output:     'build/assets',
    },
	font: {
	input:      'app/fonts/**/*.*',
        output: 'build/fonts/',
	},
    jsLibs: {
        input:   'app/lib/**/*',
        output:  'build/lib'
    },
    imagemin: {
        input:      'app/images/**/*',
        output:     'build/images/'
    },
    livereload: {
        input:      ['app/**/*.html', 'app/**/*.js', 'app/**/*.scss']
    },
    outputGeneral: 'build'
};

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true
    });
});

// HTML
gulp.task("html", function() {
    gulp.src(paths.html.input)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(paths.outputGeneral));
});

// SASS
gulp.task('sass', function() {
    return gulp.src(paths.sass.input)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.sass.output))
		.pipe(gulp.dest('build/css'));
});



// IMAGE
gulp.task('imagemin', function (){
    gulp.src(paths.imagemin.input)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.imagemin.output));
});

//FONTS
gulp.task('fonts', function() {
    return gulp.src([paths.font.input])
        .pipe(gulp.dest(paths.font.output));
});

gulp.task('libs', function() {
    return gulp.src([
		paths.jsLibs.input])
        .pipe(gulp.dest(paths.jsLibs.output));
});


//COPY GIF
gulp.task('gif', function() {
    return gulp.src([paths.gif.input])
        .pipe(gulp.dest(paths.gif.output));
});

//COPY CSS
gulp.task('copyCSS', function() {
    return gulp.src([paths.css.input])
        .pipe(gulp.dest(paths.css.output));
});

//COPY JS
gulp.task('copyJS', function() {
    return gulp.src([paths.js.input])
        .pipe(gulp.dest(paths.js.output));
});

// LIVERELOAD
gulp.task('livereload', function (){
    gulp.src(paths.livereload.input)
    .pipe(connect.reload());
});

// CLEAN ALL
gulp.task('cleanAll', function () {
    return gulp.src(paths.outputGeneral)
        .pipe(clean({force: true}));
});

// WATCH
gulp.task('watch', function () {
    gulp.watch(paths.html.input,    ['html']);
    gulp.watch(paths.sass.input,    ['sass']);
    gulp.watch(paths.js.input,      ['copyJS']);
    gulp.watch(paths.livereload.input, ['livereload']);
});

gulp.task("default", gulpSequence('cleanAll', 'connect','copyCSS', 'sass', 'html', 'libs', 'watch', 'copyJS', 'fonts', 'imagemin'));
