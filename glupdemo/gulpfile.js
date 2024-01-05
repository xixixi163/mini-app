/**
 * 每个gulp任务（task）都是一个异步的JavaScript函数，
 * 此函数是一个可以接收callback作为参数的函数，或者返回一个Promise等异步操作对象，
 * 比如创建一个任务，以下两种
 * 终端输入gulp就会执行我们这个任务
 * @param {*} cb 
 */
exports.default = (cb) => {
    console.log("my task");
    cb();
};

exports.default = () => {
    console.log("my task");
    return Promise.resolve();
};

const { series, parallel } = require('gulp')

const task1 = () => {
    console.log('task1');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000)
    })
}

const task2 = () => {
    console.log('task2')
    return Promise.resolve();
}

/**
 * 串行：任务一个一个执行
 */
// exports.default = series(task1, task2);

/**
 * 并行，所有任务一起执行
 */
exports.default = parallel(task1, task2);

const { src, dest } = require('gulp')

/**
 * src() dest() api使用
 * src() 表示创建一个读取文件系统的流
 * dest() 创建一个写入到文件系统的流
 * @returns 
 * 
 */
const copy = () => {
    return src('src/*').pipe(dest('dist/'));
}

// exports.default = copy

const less = require('gulp-less');
// 9的版本支持了esmodule 会报错
const autoprefixer = require('gulp-autoprefixer');

/**
 * 将style下的less文件解析成css 并写入dist/style
 * 给生成的css 文件加样式前缀 autoprefixer
 * @returns 
 */
const lessTask = () => {
    return src('src/style/*.less')
    .pipe(less())
    .pipe(
        autoprefixer({
            overrideBrowserslist: ['> 1%', 'last 2 versions'],
            cascade: false // 是否美化属性值
        })
    )
    .pipe(dest('dist/style'));
}

// exports.default = lessTask;

/**
 * browser-sync 实现 HMR
 * 监听样式更改-编译less文件成css-写入dist/style-更新
 */
const browserSync = require('browser-sync');
const { watch } = require('browser-sync')
const reloadTask = () => {
    browserSync.reload();
}
const browserTask = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    // 使用browserSync的watch,监听到文件改变后再刷新页面
    watch('./*.html', series(reloadTask))
    // 
    watch('src/style/*', series(lessTask, reloadTask))
}

exports.default = browserTask;