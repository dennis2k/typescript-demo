

//npm install gulp-sourcemaps


//Gulp module
var sourcemaps = require('gulp-sourcemaps');

//Gulp task
gulp.task('playground',function() {
    var tsResult = gulp.src([app.demo,app.definitions])
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(ts({
            target: 'ES5'
        }))
        return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'));   
})