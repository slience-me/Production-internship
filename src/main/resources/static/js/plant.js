const imgs = document.getElementsByTagName('img');
const imgMax = document.getElementById('img-big');
// 2 遍历小图,对每个小图绑定点击事件
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = changeImg;
}
layer = layui.layer;
// 3 点击之后,获取小图src,并设置到大图的背景图
function changeImg() {
    $("#imgBigDiv").css("background-image", 'url(' + this.src + ')')
    let x = document.getElementById("inputUrl");
    x.value = this.src;
    const detectButtonObj = $("#detectButton");
    const url = inputUrlObj.val();
    if (url == null || url.trim() === '') {
        alert('图片地址不能为空');
        return;
    }
    $.post('getResult', {'fileUrl': url}, function (result) {
        result = JSON.parse(result);
        // 1 设置baike为 a标签的href属性
        detectResultObj.attr('href', result.data.baike);
        // 2 设置 label为a标签的文本内容
        detectResultObj.html(result.data.label);
        // 3 设置dv的背景图片为url
        maxImg.css('background-image', 'url(' + url + ')');
    });
    layer.alert("识别中，请稍等！", {
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
    x.value = "";
    // imgMax.style.backgroundImage = 'url(' + this.src + ')';
    // 设置href 和 文本
    $("#detectResultObj").attr('href', $(this).attr('baike'));
    $("#detectResultObj").html($(this).attr('label'));
}

const detectButtonObj = $("#detectButton");
const inputUrlObj = $("#inputUrl");
const detectResultObj = $("#detectResult");
const maxImg = $("#imgBigDiv");
detectButtonObj.click(function () {
    const url = inputUrlObj.val();
    if (url == null || url.trim() === '') {
        alert('图片地址不能为空');
        return;
    }
    $.post('getResult', {'fileUrl': url}, function (result) {
        result = JSON.parse(result);
        // 1 设置baike为 a标签的href属性
        detectResultObj.attr('href', result.data.baike);
        // 2 设置 label为a标签的文本内容
        detectResultObj.html(result.data.label);
        // 3 设置dv的背景图片为url
        maxImg.css('background-image', 'url(' + url + ')');
    });
});
