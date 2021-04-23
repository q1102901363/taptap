//todo 配置移动端自适应
function font() {
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 3.75 + "px";
}

font();

//todo 当我们浏览器的窗口发生改变时，重新计算尺寸
window.onresize = font;
