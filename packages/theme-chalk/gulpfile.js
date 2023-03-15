const { series, src, dest } = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');


function compile() {
    return src('./src/*.scss') // 找出所有的sass文件
        .pipe(sass.sync()) // 同步进行编译
        .pipe(autoprefixer({})) // 添加兼容性前缀
        .pipe(cssmin()) // 进行压缩
        .pipe(dest('./lib')) // 结果生成到lib文件夹中
}

// 拷贝字体样式然后压缩
function copyfonts() {
    return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'));
}


// 先编译第一个方法然后执行拷贝方法
exports.build = series(compile, copyfonts);