/*为首页的搜索框写随机搜索内容*/
var searchIndex=document.getElementById('searchIndex');
var searchArr=['运动蓝牙耳机','乐Pro3','乐视盒子U4','变形金刚','乐S3'];
var searchArrLength=searchArr.length;
//console.log(searchArrLength);
///*获取随机数函数*/
function getRandom(m){
	return Math.floor(Math.random()*m);
}
searchIndex.innerHTML=searchArr[getRandom(searchArrLength)];
//为搜索页面设置高度
var searchPage=document.getElementById('searchPage');
var WH=window.screen.availHeight; 
//console.log(WH);
searchPage.style.height=WH+'px';
//点击首页搜索框，跳转到搜索页面
var headerIndex=document.getElementById('headerIndex');
searchIndex.onclick=function(){
	headerIndex.style.display='none';
	searchPage.style.display='block';
}
//点击八叉，退出搜索页面，回到首页
var quit=document.getElementById('quit');
quit.onclick=function(){
	searchPage.style.display='none';
	headerIndex.style.display='block';
}
//底部选项卡
var footer=document.querySelector('footer');
var aLi=footer.getElementsByTagName('li');
var container=document.querySelectorAll('.container');
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onclick=function(){
		for(var j=0;j<aLi.length;j++){
			aLi[j].className='';
			container[j].style.display='none';
		}
		this.className='active';
		container[this.index].style.display='block';
	}
}
//container2分类列表
var lis=document.getElementById("menu").getElementsByTagName("li");
var divs=document.getElementById("rei").children;
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		for(var j=0;j<lis.length;j++){
			divs[j].style.display="none";
		}
		divs[this.index].style.display="block";
	}
}
//container2分类列表menuBox的高度
var menuBox=document.querySelector('.menuBox');
menuBox.style.height=WH+'px';
var footerH=document.querySelector('footer').offsetHeight;
var container4=document.getElementById('container4');
container4.style.height=WH+'px';
//container4底部位置设定
var container4=document.getElementById('container4');
container4.style.height=WH+'px';
var serverBottom=document.getElementById('server_bottom');
serverBottom.style.bottom=footerH+'px';
//container5 login页面高度
var login=document.getElementById('login');
login.style.height=WH+'px';
var reg=document.getElementById('reg');
login.style.height=WH+'px';
//login.style.width=Ww+'px';

//container1
//轮播图
var aUl=document.querySelector('.bannerBox ul');
var oLi=aUl.getElementsByTagName('li');
var bannerBox=document.querySelector('.bannerBox');
var banner=document.querySelector('.banner');
var img=banner.getElementsByTagName('img');
var length=oLi.length;
var imgLast=img[0].cloneNode(true);
banner.appendChild(imgLast);
var timer8;
var index=0;
function turnPlay(){
	for(var i=0;i<length;i++){
		oLi[i].index=i;
		oLi[i].onclick=function(){
			for(var j=0;j<length;j++){
				oLi[j].setAttribute('class','');
			}
			this.setAttribute('class','active');
			//在点击时获取宽度
			roll((this.index)*bannerBox.offsetWidth);
			
		}
	}
	function roll(num,fn){
			move(banner,{marginLeft:-num},fn)
	}
	function move1(){
		roll((index)*bannerBox.offsetWidth,function(){
			index++;
			if(index>length){
				index=1;
				banner.style.marginLeft = 0;
			}
		});
			for(var j=0;j<length;j++){
				oLi[j].setAttribute('class','');
			}
			if(index>=length){
				oLi[0].setAttribute('class','active');
			}else{
				oLi[index].setAttribute('class','active');
			}
	}
	window.onload = function(){
		timer8=setInterval(move1,1000);
		bannerBox.addEventListener('mouseover',Mouseover,false);
		bannerBox.addEventListener('mouseout',Mouseout,false);
		function Mouseover(){
			clearInterval(timer8);
		}
		function Mouseout(){
			timer8=setInterval(move1,1000);
		}
	}
}
turnPlay();
//滚动广告轮播图
var scrollLeft=document.querySelector('#scrollLeft');
var scrollUl=scrollLeft.querySelector('ul');
var scrollLi=scrollUl.getElementsByTagName('li');
var length1=scrollLi.length;
console.log(scrollLi[0]);
console.log(scrollLi[0].offsetHeight);
//console.log(scrollLi[0].offsetWidth);
scrollLeft.style.height=scrollLi[0].offsetHeight+'px';
scrollUl.style.height=(length1+1)*scrollLi[0].offsetHeight+'px';
var liLast=scrollLi[0].cloneNode(true);
scrollUl.appendChild(liLast);
var timer6;
var index1=0;
var sH=scrollLi[0].offsetHeight+12;
console.log(sH);
//console.log(scrollLeft.clientHeight);
function scrollPlay(){
	function roll1(num,fn){
			move(scrollUl,{marginTop:-num},fn)
	}
	function move2(){
		roll1((index1)*sH,function(){
			index1++;
			if(index1>length1){
				index1=1;
				scrollUl.style.marginTop = 0;
			}
		});
	}
//	window.onload = function(){
		timer6=setInterval(move2,1500);
		scrollLeft.addEventListener('mouseover',Mouseover,false);
		scrollLeft.addEventListener('mouseout',Mouseout,false);
		function Mouseover(){
			clearInterval(timer6);
		}
		function Mouseout(){
			timer6=setInterval(move2,1500);
		}
//	}
}
scrollPlay();
//container2

//container3
var ShopCarBox=document.getElementById('ShopCarBox');
console.log(WH);
ShopCarBox.style.height=(WH-60-48)+'px';
//container4

//container5
//注册
//眼睛可视不可视
var passwordChange=document.getElementById('passwordChange');
var eye=document.getElementById('eye');
var flagEye=true;
eye.onclick=function(){
	if(flagEye){
		eye.className='iconfont icon-yanjingkaiyanzhuangtai';
		passwordChange.type='text';
		flagEye=false;
	}
	else{
		eye.className='iconfont icon-biyan';
		passwordChange.type='password';
		flagEye=true;
	}
}
//注册验证
var Prompt=document.getElementById("#tishi");
//提示
function checkForm(){
	if(checkUsername()&&checkPassword()&&checkPwd()&&checkvalidate()){
		var password_val = document.getElementById("passwordChange").value;
		var username_val = document.getElementById("username").value;
		setCookie("username",username_val,1)
		setCookie("password",password_val,1)
		alert("注册完成");
		return true;
	}else{
		return false;
	}
}
function checkUsername(){
	var username = document.getElementById("username");
//	var regexp = /^\w{4,16}$/;
	if(username.value!=""){
		Prompt.innerHTML = "";
		return true;
	}else{
		Prompt.innerHTML = "请输入你的用户名";
		return false;
	}
}

function checkPassword(){
	var password1 = document.getElementById("passwordChange");
	var regexp = /^[A-Za-z0-9]{6,16}$/;
	if(regexp.test(password1.value)){
		Prompt.innerHTML = "";
		return true;
	}else{
		Prompt.innerHTML = "请输入6-20位登录密码";
		return false;
	}
}

function checkPwd(){
	var password1 = document.getElementById("passwordChange");
	var cPwd = document.getElementById("querenpasswd");
	if(password1.value===""){
		Prompt.innerHTML = "请先输入密码";
		return false;
	}else if(cPwd.value===password1.value){
		Prompt.innerHTML = "";
		return true;
	}else{
		Prompt.innerHTML = "两次输入不一致,请重新输入";
		return false;
	}
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//拖动滑块验证
$('#drag').drag();
//登录
//splider
var splider=document.getElementById('splider');
var headerSplider=document.getElementById('headerSplider');
splider.style.height=WH+'px';
var Ww=window.screen.availWidth;
splider.style.left=Ww+'px';
splider.style.width=Ww+'px';
$(function(){
	$('.set').on('click',function(){
		$('#splider').animate({
			left:0
		}, 1000);
	})
	$('#headerSplider').on('click',function(){
		$('#splider').animate({
			left:Ww+'px'
		}, 1000);
	})
	$('#nav .sp1').on('click',function(){
		$('#set').hide();
		$('#login').fadeIn()
	})
	$('#onceReg').on('click',function(){
		$('#login').hide();
		$('#reg').fadeIn();
	})
	$('#onceLogin').on('click',function(){
		$('#reg').hide();
		$('#login').fadeIn();
	})
	$('.quitLogin').on('click',function(){
		$('#reg').hide();
		$('#login').hide();
		$('#set').fadeIn();
	})
	var flag100=true;
	$('.select i').on('click',function(){
	if(flag100){
		$(this).addClass('icon-103');
		$(this).removeClass('icon-yuanquan');
			flag100=false;
		}else{
		$(this).addClass('icon-yuanquan');
		$(this).removeClass('icon-103');
			flag100=true;
	}
	})
	$('#allSelect i').on('click',function(){
	if(flag100){
		$(this).addClass('icon-103');
		$(this).removeClass('icon-yuanquan');
			flag100=false;
		}else{
		$(this).addClass('icon-yuanquan');
		$(this).removeClass('icon-103');
			flag100=true;
	}
	})
	$('.delete').on('click',function(){
		$(this).parent().remove();
		console.log($('#ShopCarBox ul li').length);
		if($('#ShopCarBox ul li').length===0){
			$('#emptyShopCar').fadeIn();
			$('#ShopCarBox').hide();
			$('#account').hide();
		}
	})
	
})

