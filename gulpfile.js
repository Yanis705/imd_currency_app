const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const imagemin = require('gulp-imagemin');

sass2css = function(){
    return src('public/stylesheets/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('public/stylesheets/dist/'));
}

imagecompressor = function(){
    return src('public/images/*')
    .pipe(imagemin())
    .pipe(dest('public/images/'));
}

watchSass = function(){
    watch("./public/stylesheets/**/*.scss", sass2css);
}

watchImages = function(){
    watch("./public/images", imagecompressor);
}
exports.default = parallel(watchSass, watchImages)