const gulp=require("gulp");
const scss=require("gulp-sass-china");
const minify=require("gulp-minify-css");
const rename=require("gulp-rename");
const connect=require("gulp-connect");


gulp.task("copy-html",function(){
    return gulp.src("html/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

gulp.task("images",function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

gulp.task("script",function(){
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

gulp.task("data",function(){
    return gulp.src("data/*.json")
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

gulp.task("scss-index",function(){
    return gulp.src("scss/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))//重命名是因为压缩以后会重名
    .pipe(connect.reload());
})

gulp.task("scss-zhuce",function(){
    return gulp.src("scss/zhuce.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("zhuce.min.css"))
    .pipe(gulp.dest("dist/css"))//重命名是因为压缩以后会重名
    .pipe(connect.reload());
})

gulp.task("build",["copy-html","images","script","data","scss-index",
    "scss-zhuce"])

gulp.task("watch",function(){
    gulp.watch("html/*.html",["copy-html"]);
    gulp.watch("images/**/*",["images"]);
    gulp.watch("js/*.js",["script"]);
    gulp.watch("data/*.json",["data"]);
    gulp.watch("scss/index.scss",["scss-index"]);
    gulp.watch("scss/zhuce.scss",["scss-zhuce"]);
})

gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:4125,
        livereload:true
    })
})

gulp.task("default",["watch","server"]);