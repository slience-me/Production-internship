layui.use('layer', function () {
  const $ = layui.jquery, layer = layui.layer;

  function checkUsername_login() {
    let label = $("#userName");
    let username = label.val();
    let flag = !(username === '' || username === undefined || username == null);
    if (flag) {
      label.css("border", "");
    } else {
      label.css("border", "1px solid red");
    }
    return flag;
  }
  function checkPassword_login() {
    let label = $("#passWord");
    let password = label.val();
    let flag = !(password === '' || password === undefined || password == null);
    if (flag) {
      label.css("border", "");
    } else {
      label.css("border", "1px solid red");
    }
    return flag;
  }

  $(function () {
    $("#logout").click(function () {
      localStorage.removeItem('userId');
      localStorage.removeItem('user');
      $("#loginAlready").css("display","none");
      $("#loginNo").css("display","block");
      window.location.reload();
    })

  });

  $(function () {
    $("#login-form").click(function () {
      event.returnValue=false;
      if (checkUsername_login() && checkPassword_login()) {
        $.post("login", $("#loginForm").serialize(), function (data) {
          if (data.code === 1) {
            console.log("登录失败!");
          } else {
            console.log("登录成功!");
            msg = data.msg;
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('user', data.user);
            layer.alert(msg, {
              time: 3 * 1000, success: function (layero, index) {
                let timeNum = this.time / 1000, setText = function (start) {
                  layer.title((start ? timeNum : --timeNum) + ' 秒后关闭', index);
                };
                setText(!0);
                this.timer = setInterval(setText, 1000);
                if (timeNum <= 0) clearInterval(this.timer);
              }, end: function () {
                clearInterval(this.timer);
              }
            });
            window.location.href="/index";
          }
        }, "json");
      }
    });
  });
});
