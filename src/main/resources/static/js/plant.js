const imgs = document.getElementsByTagName('img');
const imgMax = document.getElementById('img-big');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = changeImg;
}
layer = layui.layer;
function changeImg() {
    $("#imgBigDiv").css("background-image", 'url(' + this.src + ')')
    let x = document.getElementById("inputUrl");
    x.value = this.src;
    const detectButtonObj = $("#detectButton");
    const url = inputUrlObj.val();
    if (url == null || url.trim() === '') {
        // alert('图片地址不能为空');
        layer.alert("图片地址不能为空", {
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
        return;
    }
    $.post('getResult', {'fileUrl': url}, function (result) {
        result = JSON.parse(result);
        detectResultObj.attr('href', result.data.baike);
        detectResultObj.html(result.data.label);
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
        layer.alert("图片地址不能为空", {
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
        return;
    }
    $.post('getResult', {'fileUrl': url}, function (result) {
        result = JSON.parse(result);
        detectResultObj.attr('href', result.data.baike);
        detectResultObj.html(result.data.label);
        maxImg.css('background-image', 'url(' + url + ')');
    });
});
