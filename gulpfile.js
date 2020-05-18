const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

sass2css = function(){
    return src("./public/stylesheets/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("./public/stylesheets/dist/"))    
};

exports.default = function(){
    watch("./public/stylesheets/**/*.scss", sass2css);
}