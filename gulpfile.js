const {
    src,
    dest,
    watch
} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const image = require('gulp-image');
const minify = require('gulp-minify');

minifyjs = function () {
    return src("./public/javascript/*.js")
        .pipe(minify({
            noSource: true
        }))
        .pipe(dest("./public/javascript/dist/"))
};

sass2css = function () {
    return src("./public/stylesheets/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("./public/stylesheets/dist/"))
};

imageConv = function () {
    return src('./public/images/*')
        .pipe(image())
        .pipe(dest('./public/convImages/'));
};

exports.default = function () {
    watch("./public/stylesheets/**/*.scss", sass2css);
    watch("./public/images/**", imageConv);
    watch("./public/javascript/*.js", minifyjs);
}