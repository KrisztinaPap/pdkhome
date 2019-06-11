var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function(done) {
    gulp.src('components/sass/**/*.scss')
        .pipe(compass({
            sass: 'components/sass',
            image: 'builds/development/images',
            style: 'expanded'
        }))
        .on('error', function(error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest('builds/development/css')),
        done();
});
