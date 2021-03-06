/**
 * Created by iraquitan on 9/1/16.
 */
/*eslint-env node */
/*eslint-disable no-console*/

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var eslint = require("gulp-eslint");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var imagemin = require("gulp-imagemin");

gulp.task("default", ["copy-html", "scripts", "copy-images", "styles", "lint"], function () {
    // default tasks here
    gulp.watch("./sass/**/*.scss", ["styles"]);
    // gulp.watch("./js/**/*.js", ["lint"]);
    gulp.watch("./index.html", ["copy-html"]);
    gulp.watch("./dist/index.html").on("change", browserSync.reload);
    browserSync.init({
        server: "./dist",
        browser: "google chrome"
    });
});

gulp.task("lint", function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(["./js/**/*.js"])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format());
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        // .pipe(eslint.failAfterError());
});

gulp.task("styles", function () {
    gulp.src("./sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("copy-html", function () {
    gulp.src("./index.html")
        .pipe(gulp.dest("./dist"));
});

gulp.task("copy-images", function () {
    gulp.src("./images/*")
        .pipe(imagemin({
            progressive: true,
        }))
        .pipe(gulp.dest("./dist/images"));
});

gulp.task("scripts", function () {
    gulp.src(["./js/jQuery.js", "./js/helper.js", "./js/*.js"])
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./dist/js"));
});

gulp.task("scripts-dist", function () {
    gulp.src(["./js/jQuery.js", "./js/helper.js", "./js/*.js"])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(uglify().on("error", function(e){console.log(e);}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist/js"));
});

gulp.task("dist", ["copy-html", "copy-images", "styles", "lint", "scripts-dist"]);