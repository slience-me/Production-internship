layui.use('layer', function () {
  const $ = layui.jquery;
  $(function () {
    $.get("getStatus", {Id:1}, function (data) {
      if (data.user === '' || data.user === undefined) {
        $("#loginAlready").css("display","none");
        $("#loginNo").css("display","block");
      } else {
        $("#loginAlready").css("display","block");
        $("#loginNo").css("display","none");
        var msg = data.user;
        console.log(msg)
        $("#span_username").html(msg)
      }
    })
  })
});
