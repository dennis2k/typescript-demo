/**
 *  Requires
 **/
var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsConfig = require("tsconfig-glob");
var sourcemaps = require('gulp-sourcemaps');

/**
 * Variables for compiling typescript src
 */
var app = {
    definitions : 'typings/tsd/**/*d.ts',
    src : 'src/*.ts',
    dist : 'dist'
};


gulp.task('playground',function() {
    var tsResult = gulp.src([app.src,app.definitions])
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(ts({
            sortOutput: true,
            noImplicitAny: false,
            removeComments : false,
            noExternalResolve : true,
            target: 'ES6'
        }))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(app.dist));   
})

gulp.task('demo-watch',function() {
    gulp.watch(app.demo,['default']);
})

gulp.task("ts-glob", function () {  
    return tsConfig({
        configPath: ".",
        cwd: process.cwd(),
        indent: 2
    });
});

gulp.task('default',['ts-glob','playground']);
