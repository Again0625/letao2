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

// 二级分类切换功能
$(function () {
    // 注册事件完成公共功能
    // 功能1: 左侧二级导航切换效果
    $('.lt_aside .category').click(function () {
        $('.lt_aside .child').stop().slideToggle();
    })

    // 功能2: 左侧菜单切换效果
    $('.icon_left').click(function () {
        $('.lt_aside').toggleClass('hidemenu');
        $('.lt_topbar').toggleClass('hidemenu');
        $('.lt_main').toggleClass('hidemenu');
    })

    // 功能3:退出功能
    // 给右侧按钮，添加点击事件
    $('.icon_right').click(function () {
        $('#logoutModal').modal('show')
    });

    // 给退出按钮，添加点击事件，需要在退出是，销毁当前用户的登陆状态
    $('#logoutBtn').click(function () {
        $.ajax({
            type: 'get',
            url: '/employee/employeeLogout',
            dataType: 'json',
            success: function (info) {
                console.log(info);
                if (info.success) {
                    // 销毁登录状态成功
                    location.href = "login.html";
                }

            }
        })
    })
})