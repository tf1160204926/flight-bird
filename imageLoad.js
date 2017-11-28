// 图像加载函数，里面的第一个参数是需要加载的图片目前的存放地方，是以key value的形式存放。
// fn为回调函数，当所有的图片加载完毕后，就把加载完得到图片作为参数传递到这个回调函数里面，回调函数里面就是我们要执行的程序，就能用到加载完毕的图片了
function loadImage(imgUrl,fn){
	// 先定义一个对象，用来保存加载的图片，等加载完后，把这个对象作为回调函数的参数，以供以后使用
	var imgObj={};
	// 因为每次遍历时都需要创建一个临时的tmpimg（图片标签），所以写在for循环外面，不耗费资源
	var tmpImg;
	// 定义需要加载的图片的数量(后面在判断是否所有的图片都加载完毕的时候用到)
	var imgLength=0;
	// 定义加载完毕的图片数量
	var loaded=0;
	// 开始遍历imgUrl对象，在遍历imgUrl中创建img临时标签
	for(var k in imgUrl){
		// 每遍历一个。需要加载的图片数量自增一个
		imgLength++;
		// 把创建的临时img标签赋值给tmpImg
		tmpImg=new Image();
		// 图片有个onload事件，这个事件触发时，就相当于图片加载完毕，每加载完毕一个图片，加载完的图片数量增加一个
		tmpImg.onload=function(){
			loaded++;
			// 当需要加载的图片数量imgLength和加载完毕的图片数量相等时，就算是所有图片加载完毕了，就可以执行回调函数fn了
			if(loaded>=imgLength){
				fn(imgObj);
			}
		}
		// 为了防止出现坦克那样刷新就不出来的情形，把设置src放在最后
		// 设置tmpImg的src属性为遍历到的imgUrl中的val，也就是图片的地址
		tmpImg.src=imgUrl[k];
		// 把这个带有src的临时图片标签存放到imgObj中
		imgObj[k]=tmpImg;
	}
}


