////多物体缓冲运动
//function move(obj,json,fn){
//	clearInterval(obj.timer2);
//	obj.timer2 = setInterval(function(){
//	var flag = true;
//	for (var attr1 in json) {
////		if(attr==="opacity"){
////			var icur = parseFloat(getStyle(obj,attr1))*100;
////		}else{
//			var icur = parseInt(getStyle(obj,attr1));
////		}
//		var speed = (json[attr1]-icur)/10;
//		speed=speed>0?Math.ceil(speed):Math.floor(speed);
//		if (icur!=json[attr1]) {
//			flag = false;
////			if (attr==="opacity") {
////				obj.style.filter="alpha(opacity="+(icur+speed)+")";
////				obj.style.opacity=(icur+speed)/100;
////			} else{
////				obj.style[attr]=icur+speed+"px";
//				obj.attr[attr1]=icur+speed+"px";
////			}
//			
//		}
//	}
//	if (flag) {
//		clearInterval(obj.timer2);
//		if (fn) {
//			fn();
//		}
//	}
//		
//	},30)
//}
////获取元素的样式
//function getStyle(obj,attr1){
////	if (obj.currentStyle) {
////		return obj.currentStyle[attr];
////	} else{
////		return getComputedStyle(obj,false)[attr];
////	}
//		return obj.attr(attr1);
//}
//

function move(obj,json,fn){
	clearInterval(obj.timer2);
	obj.timer2=setInterval(function(){
		var flag=true;
		//样式分两种情况：透明度和其他，ie中的透明度是0到100，用filter写，其他是0到1，用opacity写
		for(var attr in json){
			if(attr==='opacity'){
				var icur=parseFloat(getStyle(obj,attr))*100;
			}else{
				var icur=parseInt(getStyle(obj,attr));
			}
			//json[attr]是设定好的样式值，icur是当前样式的值
			var speed=(json[attr]-icur)/10;
			//Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
			//◎Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；
			//◎Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数(这也是我们在数学课上学到的舍入规则)。
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			//改变style的值
			if(icur!=json[attr]){
				flag=false;
				if(attr==='opacity'){
					obj.style.filter='alpha(opacity='+(icur+speed)+')';
					obj.style.opacity=(icur+speed)/100;
				}else{
					obj.style[attr]=icur+speed+'px';
				}
			}
		}
		if(flag){
			clearInterval(obj.timer2);
			//如果回调函数，就执行回调函数。
			if(fn){
				fn();
			}
		}
	},30)
}
//获取当前样式的方法
function getStyle(obj,attr){
	//currentStyle[attr]是ie获取当前样式的方法
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		//getComputeStyle(obj,false)[attr]，火狐老版本需要写的
		return getComputedStyle(obj,false)[attr];
	}
}
