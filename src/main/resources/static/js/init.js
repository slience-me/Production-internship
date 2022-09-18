layui.use('layer', function () {
  const $ = layui.jquery;
  $(function () {
    let userId = localStorage.getItem('userId');
    let user = localStorage.getItem('user');
    if (user === null) {
      $("#loginAlready").css("display","none");
      $("#loginNo").css("display","block");
      window.location.href="/login";
    } else {
      $("#loginAlready").css("display","block");
      $("#loginNo").css("display","none");
      var msg = user;
      $("#span_username").html(msg)
    }
    // $.get("getStatus", {Id:1}, function (data) {
    //   if (data.user === '' || data.user === undefined) {
    //     $("#loginAlready").css("display","none");
    //     $("#loginNo").css("display","block");
    //   } else {
    //     $("#loginAlready").css("display","block");
    //     $("#loginNo").css("display","none");
    //     var msg = data.user;
    //     console.log(msg)
    //     $("#span_username").html(msg)
    //   }
    // })
  })
});
