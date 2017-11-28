function Foo(imgUrl, fn) {
    // 定义一个对象用来装图片的url
    var imgObj = {};
    var tmpimg;
    var imglength = 0;
    var loaded = 0;
    for (k in imgUrl) {
        imglength++;
        tmpimg = new Image();
        tmpimg.onload = function() {
            loaded++;
            if (imglength <= loaded) {
                fn(imgObj);
            }
        }
        tmpimg.src = imgUrl[k];
        imgObj[k] = tmpimg;
    }
}