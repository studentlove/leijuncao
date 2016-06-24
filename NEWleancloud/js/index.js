$(function(){
	//alert(1);
  //ÂÖ²¥µÄ¿í¶È
  var wd=$(document).width();
  var wh=$(document).height();
  var num=0;
  $('.swiper').width(wd);
  $('.swiper .swiper-ul li').width(wd);
  var liNum=$('.swiper .swiper-ul li').length;
  //alert(liNum);
  //ÓÒ±ß°´Å¥
  $('.swiper .btn-right').on('click', function (event) {
    event.preventDefault();
    num++;
    //alert(num*wd);
    if(num>=liNum){
      num=1;
      $('.swiper-box').css({
        'left':0
      }).animate({
        'left':(-num*wd)
      },1000);

    }else{
      $('.swiper-box').animate({
        'left':(-num*wd)
      },1000);
    }
   if (num==5) {
   	 $('.swiper .cycle li').removeClass('cycle-active');
   	 $('.swiper .cycle li').eq(0).addClass('cycle-active');
   }else{
	$('.swiper .cycle li').removeClass('cycle-active');
    $('.swiper .cycle li').eq(num).addClass('cycle-active');
   }
	;

    //console.log($('.swiper .cycle li').eq(num));

  })

//  ×ó±ß°´Å¥
  $('.swiper .btn-left').on('click', function (event) {
    event.preventDefault();
    num--;
    //alert(num*wd);
    if(num<0){
      num=liNum-2;
      $('.swiper-box').css({
        'left':-(liNum-1)*wd
      }).animate({
        'left':(-num*wd)
      },1000);;

    }else{
      $('.swiper-box').animate({
        'left':(-num*wd)
      },1000);
    }
    $('.swiper .cycle li').removeClass('cycle-active');
    $('.swiper .cycle li').eq(num).addClass('cycle-active');
  })

//Ô²µã

$('.swiper .cycle').on('click','li',function(){
   num=$(this).index();
  $('.swiper .cycle li').removeClass('cycle-active');
  $(this).addClass('cycle-active');
  $('.swiper-box').animate({
    'left':(-num*wd)
  },1000);
})



})