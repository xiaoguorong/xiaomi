// {//轮播
let n=0;
$(".banner_l1").click(function(){	
	let index=$(".banner_l1").index($(this));
	$(".b1").css({"opacity":0}).eq(index).css({"opacity":1,"transition":"all 1s linear"});
	$(".banner_l1").css({"background":"#fff","transition":"all 1s linear"}).eq(index).css({"background":"#000","transition":"all 1s linear"});
	n=index;
})
function move(){
	n++;
	if(n==$(".banner_l1").length){
		n=0;
	}
	if(n<0){
		n=$(".banner_l1").length-1;
	}
	$(".b1").css({"opacity":0});
	$(".banner_l1").css({"background":"#fff","transition":"all 1s linear"});		
	$(".b1").eq(n).css({"opacity":1,"transition":"all 1s linear"});
	$(".banner_l1").eq(n).css({"background":"#000","transition":"all 1s linear"});
}
let t=setInterval(move,1000);
$("#banner").mouseenter(function(){
	clearInterval(t);
})
$("#banner").mouseleave(function(){
	t=setInterval(move,1000)
})
$(".banner_btn2").click(function(){//点击太快会轮播图
		move();
})
$(".banner_btn1").click(function(){
		n-=2;
		move();
})
//小米明星单品实现翻动
//箭头移动
$(".star").each(function(index,ele){
	let a=0;
	let you=$(this).find(".star_btn2");
	let zuo=$(this).find(".star_btn1");
	let star_all=$(this).find(".star_fan");
	$(you).click(function(){
		$(zuo).removeClass("disable");
			a++;
			if(a==2){
				$(you).addClass("disable");
			}
			if(a==3){
				a=2;
				return;
			}
		$(star_all).css({"marginLeft":-1226*a});
	})
	$(zuo).click(function(){
		$(you).removeClass("disable");
			a--;
			if(a==0){
				$(zuo).addClass("disable");
			}
			if(a==-1){
				a=0;
				return;
			}
		$(star_all).css({"marginLeft":-1226*a});
	})
})
//搭配，配件，周边实现移入翻转
$(".dapei").each(function(index,ele){
	let item=$(this).find(".dapei_top span");
	let item_bottom=$(this).find(".dapei_bottom");
	$(item).mouseenter(function(){
		$(item,item_bottom).removeClass("active");
		let index=$(item).index($(this));
		$(this).addClass("active");
		$(item_bottom).eq(index).addClass("active");
	})
})
//内容
$(".neirong_item").each(function(index,ele){
	let a=0;
	let zuo=$(this).find(".neirong_btnb1:first-of-type");
	let you=$(this).find(".neirong_btnb2");
	let neirong_dian=$(this).find(".neirong_btn");
	let neirong_lunbo_a=$(this).find(".neirong_lunbo_a");
	let l=$(this).find(".neirong_btn").length;
	$(you).click(function(){
		a++;
		if(a==l){
			a=l-1;
			return;
		}
	$(neirong_lunbo_a).css({"marginLeft":-296*a});
	$(this).parent().find(".neirong_btn").css({"background":"#b0b0b0","border": "2px solid #fff"}).eq(a).css({"background":"#fff","border": "2px solid #ff6700"});
	})
	$(zuo).click(function(){
		a--;
		if(a==-1){
			a=0;
			return;
		}
	$(neirong_lunbo_a).css({"marginLeft":-296*a});
	$(this).parent().find(".neirong_btn").css({"background":"#b0b0b0","border": "2px solid #fff"}).eq(a).css({"background":"#fff","border": "2px solid #ff6700"});
	})
	$(neirong_dian).click(function(){
		let index=$(neirong_dian).index($(this));
		$(neirong_lunbo_a).css({"marginLeft":-296*index});
		$(neirong_dian).css({"background":"#b0b0b0","border": "2px solid #fff"});
		$(this).css({"background":"#fff","border": "2px solid #ff6700"});
		$(neirong_dian).not(this).mouseenter(function(){
			$(this).css("background","#ff6700");
		})
		$(neirong_dian).not(this).mouseleave(function(){
			$(this).css("background","#b0b0b0");
		})
		a=index;
	})
})
//banner_left
$(".banner_nav>li").mouseenter(function(){
	let index=$(".banner_nav>li").index($(this));
	$(".menu").eq(index).css({"display":"block","backgroundColor":"red"})
})
$(".banner_nav>li").mouseleave(function(){
	let index=$(".banner_nav>li").index($(this));
	$(".menu").eq(index).css({"display":"none"})
})
//顶部
$(".nav_menu_type").slice(0,1).mouseenter(function(){
	$(".nav_menu_item").css({"height":300,"borderTop":"1px solid green"})
})
$(".nav_menuaa").mouseleave(function(){
	$(".nav_menu_item").css({"height":0,"borderTop":"none"})
})
//顶部翻动
$(".nav_menu").mouseenter(function(){
	$(".nav_menu,.nav_menu_xia").removeClass("nav_fandongxiaoguo");
	let index=$(".nav_menu").index($(this));
	$(".nav_menu_xia").eq(index).addClass("nav_fandongxiaoguo");
})