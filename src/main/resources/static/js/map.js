var map = new AMap.Map('container', {
  resizeEnable: true, //是否监控地图容器尺寸变化
  zoom: 17, //初始化地图层级
  center: [114.520781, 37.978371] //初始化地图中心点
});
var marker = new AMap.Marker({
  position: map.getCenter(),
  icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
  offset: new AMap.Pixel(-13, -30)
});
marker.setMap(map);
// 设置鼠标划过点标记显示的文字提示
marker.setTitle('方大科技园3楼天亮教育');
// 设置label标签
// label默认蓝框白底左上角显示，样式className为：amap-marker-label
marker.setLabel({
  offset: new AMap.Pixel(20, 20),  //设置文本标注偏移量
  content: "<div class='info'>裕华区裕翔街26号河北科技大学</div>", //设置文本标注内容
  direction: 'right' //设置文本标注方位
});
