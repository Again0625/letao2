$(function () {
    // 使用表单校验插件
    $('#form').bootstrapValidator({
        // 设置小图标 默认是bootstaro风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        // 指定校验字段
        // 用户名不得为空，长度必须2-6位
        // 密码不得为空，长度必须为6-12位
        fields: {
            // 校验用户名密码，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    // 长度校验
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2-6位'
                    },
                    // 专门用于配置回调提示信息的校验规则                    
                    callback: {
                        message: '用户名不存在'
                    }
                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    // 长度校验
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码长度必须在6-12位'
                    },
                    // 专门用于配置回调提示信息的校验规则
                    callback: {
                        message: "密码错误"
                    }
                }
            }
        }
    })

    // 2. 进行登录请求
    //    通过 ajax 进行登录请求

    // 表单校验插件有一个特点, 在表单提交的时候进行校验
    // 如果校验成功, 继续提交, 需要阻止这次默认的提交, 通过 ajax 进行请求提交
    // 如果校验失败, 默认会阻止提交
    $('#form').on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        $.ajax({
            type: 'post',
            url: "/employee/employeeLogin",
            data: $('#form').serialize(),
            dataType: 'json',
            success: function (info) {
                console.log(info);
                if (info.success) {
                    location.href = 'index.html'
                }
                if (info.error === 1000) {
                    // alert('用户名不存在')
                    // updateStatus
                    // 参数1:字段名称
                    // 参数2:校验状态
                    // 参数3：校验规则,可以设置提示文本
                    $('#form').data('bootstrapValidator').updateStatus("username", "INVALID", "callback")

                }
                if (info.error === 1001) {
                    // alert('密码错误')
                    $("#form").data('bootstrapValidator').updateStatus("password", "INVALID", "callback")
                }
            }

        })
    })

    // 3.重置功能实现
    $("[type='reset']").click(function () {
        $('#form').data("bootstrapValidator").resetForm()
    })

})