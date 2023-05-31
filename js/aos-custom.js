var image = new Image()
image.onload = function () {
//在圖片載入後要進行的操作
    AOS.init({
        once: true,
    });
}
image.src = 'images/product/cover.png', 'images/product/cover-m.png'