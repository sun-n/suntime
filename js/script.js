$(".sub").hide();
$(".menu>li").mouseover(function(){
$(this).children(".sub").stop().slideDown();
})
$(".menu>li").mouseout(function(){
 $(this).children(".sub").stop().slideUp();
 })



$(".sitemap_bg").hide();
$(".m_btn").click(function(){
$(".sitemap_bg").slideDown();
})
$(".close").click(function(){
 $(".sitemap_bg").slideUp();
 })

let winWidth=$(window).outerWidth();//창 사이즈 기준
if(winWidth<=992){
 $(".sitemap_bg").addClass("mobile")
 $(".mobile .site_sub").hide();//sitemap_bg에 추가해서 사용
 $(".mobile .site_map>li").click(function(){
 $(this).children(".site_sub").stop().slideToggle();
 $(this).siblings().children(".site_sub").stop().slideUp();
 $(this).toggleClass("site_toggle");
 $(this).siblings().removeClass("site_toggle");
 })


} //end if
/*
$(window).resize(function(){
location.reload();//이벤트, 메소드

})
*/


let resizeTimer=null;//setTimeout함수 저장될 변수
function rload(){
 location.reload();
}
$(window).resize(function(){
 clearTimeout(resizeTimer);//실행중인 settimeout을 취소하는 함수
 resizeTimer = setTimeout(rload, 400);//0.4초뒤 호출,
})




const main=new Swiper('.main .swiper',{
 
 loop:true,
 autoplay:{delay:3000,},
 navigation:{prevEl:'.main .btn_prev', nextEl:'.main .btn_next'},
 pagination:{el:'.btns .swiper-pagination',type:'fraction'},

})
const pagingSwiper=new Swiper('.main .swiper',{
loop:true,
pagination:{
 el:".ctrlbox>.swiper-pagination",
 type:"progressbar",
},
})
main.controller.control=pagingSwiper;//swiper2개 연결하여 pagination 사용


/*footer*/
$(".family_list").hide();
$(".family_btn").click(function(){
 $(".family_list").toggle();
 $(".family_btn").toggleClass("toggle");
})

$(".top_btn").click(function(){
 $("html").animate({scrollTop:0},500)
})

AOS.init();