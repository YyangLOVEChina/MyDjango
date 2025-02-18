/* 用于提示框闪烁 */
$(document).ready(function () {
    setTimeout(function () {
        $(".overlay").fadeOut(500);
    }, 3000); // 3秒后消失
});