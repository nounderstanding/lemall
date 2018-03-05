var top1=document.getElementById("top");
  console.log(top1);
    window.onscroll=function(){
    	var t=document.documentElement.scrollTop||document.body.scrollTop;
//  	console.log(t);
        if(t>=600){
        	top1.style.display="block";
        }else{
        	top1.style.display="none";
        }
    }
    var timer100=null;
    top1.onclick=function(){
    	clearInterval(timer100);
    	timer100=setInterval(function(){
    		var o=document.documentElement.scrollTop||document.body.scrollTop;
    		var speed=Math.floor(-o/6);
    		if(document.body.scrollTop){
    			document.body.scrollTop=o+speed;
    		}else{
    			document.documentElement.scrollTop=o+speed;
    			
    		}
    		if(o==0){
    			clearInterval(timer100);
    		}
    	},30)
    }
