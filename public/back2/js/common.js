//引入了nprogress.js文件后，就有了一个全局对象NProgress对象
//开启进度条
// NProgress.start();
//关闭进度条
// NProgress.done();
// 配置禁用小圆环
NProgress.configure({
    showSpinner: false
});

$(document).ajaxStart(function () {
    // console.log("ajaxStart在开始一个ajax请求时触发");
    NProgress.start();
})
$(document).ajaxStop(function () {
    // console.log("ajaxStop在全部的ajax请求结束时触发");
    // 模拟服务器网络延迟
    setTimeout(function () {
        NProgress.done();
    }, 500)
})