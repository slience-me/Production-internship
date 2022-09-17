layui.use(['carousel', 'form'], function () {
  var carousel = layui.carousel
    , form = layui.form;
  //图片轮播
  carousel.render({
    elem: '#test10'
    , width: '100%'
    , height: '360px'
    , interval: 3000
  });
});