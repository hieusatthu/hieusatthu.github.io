 $(function(){
 	
 	$('.action-bars').click(function(event) {
 		$('.main-menu').slideToggle();
 	});
  //gallery home portfolio
  function maso() {
    $('.grid').isotope({
      itemSelector: '.grid-item',
            // columnWidth: '.grid-sizer',
            percentPosition: true,
            layoutMode: 'fitRows',
            fitRows: {
                // gutter: 10,
                gutter: '.gutter-sizer'
              }
            });
  }
  maso();
  
   // slick
   $('.wraper-feedback-clident').slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

// click to btn shopping-cart
var demCart=0;
$('.btn-cats').click(function(event) {
  demCart++;

  if(demCart%2!=0)
  {
    $('.cart-info').css('opacity', 1);
    $('.cart-info').css('visibility', 'visible');
    $('.cart-info').css('transform', 'translateY(0px)');
  }else{
    $('.cart-info').css('opacity', 0);
    $('.cart-info').css('visibility', 'hidden');
    $('.cart-info').css('transform', 'translateY(70px)');
  }

  return false;
});
// hidden search and cart
$('.wraper-close i').click(function(event) {

});

// home 2

// isotope project gallery home2
var $grid = $('.row.wraper-gallery-home-2').isotope({
  itemSelector: '.content-gallery',
  layoutMode: 'masonry'
});
var $grid_second = $('.gallery-masonry-gird.gallery-isotope.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
// gallery
var $grid_tertiary = $('.wraper').isotope({
  itemSelector: '.waperdetail-gallery',
  layoutMode: 'fitRows'
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
// click to gallery
var arrOption=document.querySelectorAll('.option-project-gallery ul li a');
$('.option-project-gallery ul li a').click(function(event) {
  var data=($(this).attr('data-gallery'));
  var data_second=($(this).attr('data-category'));
  var data_tertiary=($(this).attr('data-three'));
  console.log(data_tertiary);
  $grid.isotope({
    filter:data
  });
  $grid_second.isotope({
    filter:data_second
  });
  $grid_tertiary.isotope({
    filter:data_tertiary
  });

  // filte option gallery
  for (var i = 0; i < arrOption.length; i++) {
    arrOption[i].classList.remove("is-active");
  }
  $(this).addClass('is-active');
  return false;
});



// slick brand home 2
$('.wraper-slick-brand').slick({
  infinite: true,
  speed: 300,
  slidesToShow:7,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
  {
    breakpoint: 1350,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 3,
      infinite: true,

    }
  },
  {
    breakpoint: 896,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
      centerMode: true,
      centerPadding: '20px',
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
      centerMode: true,
      centerPadding: '65px',
    }
  },
  {
    breakpoint: 660,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '-10px',
    }
  },
  {
    breakpoint: 525,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,  centerPadding: '0px',

    }
  }
  ]
});
//move to top
var positionScroll=$(document).scrollTop();


$('.wrap-icon-move i').click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(function() {
  $(window).scroll(function() {
    var positionScroll=$(document).scrollTop();
    if(positionScroll>800)
    {
      $('.wrap-icon-move i').css('display', 'block');
    }else{
     $('.wrap-icon-move i').css('display', 'none');
   }
 });
});

  // click to btn search
  var demClickSearch=0;
  $('.btn-search').click(function(event) {

   demClickSearch++;
   if(demClickSearch%2!=0)
   {
    $('.wraper-search').css('margin-top', 0);
    $('.wraper-search').css('display', 'block');

  }else{
    $('.wraper-search').css('margin-top', '-2em');
  }
});
// }
// countdown about project
$(window).on("load",function(){
  $(document).scrollzipInit();
  $(document).rollerInit();
});
$(window).on("load scroll resize", function(){
  $('.numscroller').scrollzip({
    showFunction    :   function() {
      numberRoller($(this).attr('data-slno'));
    },
    wholeVisible    :     false,
  });
});
$.fn.scrollzipInit=function(){
  $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
};
$.fn.rollerInit=function(){
  var i=0;
  $('.numscroller').each(function() {
    i++;
    $(this).attr('data-slno',i); 
    $(this).addClass("roller-title-number-"+i);
  });        
};
$.fn.scrollzip = function(options){
  var settings = $.extend({
    showFunction    : null,
    hideFunction    : null,
    showShift       : 0,
    wholeVisible    : false,
    hideShift       : 0,
  }, options);
  return this.each(function(i,obj){
    $(this).addClass('scrollzip');
    if ( $.isFunction( settings.showFunction ) ){
      if(
        !$(this).hasClass('isShown')&&
        ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
        ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
        ){
        $(this).addClass('isShown');
      settings.showFunction.call( this );
    }
  }
  if ( $.isFunction( settings.hideFunction ) ){
    if(
      $(this).hasClass('isShown')&&
      (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
        ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
      ){
      $(this).removeClass('isShown');
    settings.hideFunction.call( this );
  }
}
return this;
});
};
function numberRoller(slno){
  var min=$('.roller-title-number-'+slno).attr('data-min');
  var max=$('.roller-title-number-'+slno).attr('data-max');
  var timediff=$('.roller-title-number-'+slno).attr('data-delay');
  var increment=$('.roller-title-number-'+slno).attr('data-increment');
  var numdiff=max-min;
  var timeout=(timediff*1000)/numdiff;
            //if(numinc<10){
                //increment=Math.floor((timediff*1000)/10);
            //}//alert(increment);
            numberRoll(slno,min,max,increment,timeout);
            
          }
    function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
    if(min<=max){
      $('.roller-title-number-'+slno).html(min);
      min=parseInt(min)+parseInt(increment);
      setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
    }else{
      $('.roller-title-number-'+slno).html(max);
    }
  }

  // click to show answer
  $('.question>i.first').click(function(event) {
    $('.answer.first>p').slideToggle();
    $('.answer.seconnd>p').slideUp();
    $('.answer.tertiary>p').slideUp();
  });
  $('.question>i.seconnd').click(function(event) {
    $('.answer.seconnd>p').slideToggle();
    $('.answer.first>p').slideUp();
    $('.answer.tertiary>p').slideUp();
  });
  $('.question>i.tertiary').click(function(event) {
    $('.answer.tertiary>p').slideToggle();
    $('.answer.first>p').slideUp();
    $('.answer.seconnd>p').slideUp();
  });
  // 
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    ]
  });
// slick about us
$('.bottom').slick({
  slidesToShow: 2,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      arrows: false,


      slidesToShow: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,

      
      slidesToShow: 1
    }
  }
  ]
});

// click vào slide số mấy

var arrImgSm=$('.detail-img-option');
 // lấy ra mảng hình ảnh to
 var arrImgLg=$('.detail-img-main');
 $('.detail-img-option').click(function(event) {
   // xóa hết class is-active của nó đi
   for (var i = 0; i < 3; i++) {
     arrImgSm[i].classList.remove('is-active');
   }
   $(this).addClass('is-active');
   // kiểm tra xem dang click vào slide số mấy
   var vitriactive=this;
   var vistrislide=0;
   for (var vistrislide = 0; vitriactive=vitriactive.previousElementSibling; vistrislide++) {
   }
   // 
   // xóa hết class is-active của nó đi
   for (var i = 0; i < 3; i++) {
     arrImgLg[i].classList.remove('is-active');
   }
   arrImgLg[vistrislide].classList.add('is-active');
 });
 var vitrislideLg=0;
// click to icon right
// xóa hết active đi
$('.action-img-main>i.next').click(function(event) {
    // xóa hết class is-active của nó đi
    for (var i = 0; i < 3; i++) {
     arrImgLg[i].classList.remove('is-active');
   }
   // xác định vị trí của slide này 
   var vitriactiveLg=$(this).parent('.action-img-main').parent('.detail-img-main');
   // console.log(vitriactiveLg);
    // for (var vitrislideLg = 0; vitriactiveLg=vitriactiveLg.previousElementSibling; vitrislideLg++) {

    // }
    vitrislideLg++;
    vitrislideLg=vitrislideLg%3;
    arrImgLg[vitrislideLg].classList.add('is-active');
    for (var i = 0; i < 3; i++) {
     arrImgSm[i].classList.remove('is-active');
   }
   arrImgSm[vitrislideLg].classList.add('is-active');
   // // cho thằng slide tiếp theo hiện lên
   //  vitrislideLg;
   
   
   //  arrImgLg[vitrislideLg].classList.add('is-active');

 });
$('.action-img-main>i.pre').click(function(event) {
    // xóa hết class is-active của nó đi
    for (var i = 0; i < 3; i++) {
     arrImgLg[i].classList.remove('is-active');
   }
   // xác định vị trí của slide này 
   var vitriactiveLg=$(this).parent('.action-img-main').parent('.detail-img-main');
   // console.log(vitriactiveLg);
    // for (var vitrislideLg = 0; vitriactiveLg=vitriactiveLg.previousElementSibling; vitrislideLg++) {

    // }
    vitrislideLg--;
    if(vitrislideLg<0)
    {
      vitrislideLg=2;
    }
    arrImgLg[vitrislideLg].classList.add('is-active');
    for (var i = 0; i < 3; i++) {
     arrImgSm[i].classList.remove('is-active');
   }
   arrImgSm[vitrislideLg].classList.add('is-active');
   // // cho thằng slide tiếp theo hiện lên
   //  vitrislideLg;
   //  arrImgLg[vitrislideLg].classList.add('is-active');

 });

// slide range
// click to plus minus
var valuePlusMinus=1;
$('.minus-product-detail').click(function(event) {
 valuePlusMinus--;
 if(valuePlusMinus<1)
 {
  valuePlusMinus=1;
}
$('#value-product-detail').text(valuePlusMinus+'');

});
$('.plus-product-detail').click(function(event) {
 valuePlusMinus++;

 $('#value-product-detail').text(valuePlusMinus+'');

});

// menu
// check screen width
   // show menu c1
   var demshowmenu=0;
   $('.sub-menu-c1>i').click(function(event) {
    demshowmenu++;
    if(demshowmenu%2!=0)
    {
      console.log('click vao menu o man hinh');
      $(this).parent('.sub-menu-c1').children('ul').css('position','static');
      $(this).parent('.sub-menu-c1').children('ul').css('position', 'static');
      $(this).parent('.sub-menu-c1').children('ul').css('opacity', '1');
      $(this).parent('.sub-menu-c1').children('ul').css('visibility', 'visible');
      $(this).parent('.sub-menu-c1').children('ul').css('display', 'block');
    }else{
      $(this).parent('.sub-menu-c1').children('ul').css('position', 'static');
      $(this).parent('.sub-menu-c1').children('ul').css('opacity', '0');
      $(this).parent('.sub-menu-c1').children('ul').css('visibility', 'hidden');
      $(this).parent('.sub-menu-c1').children('ul').css('display', 'none');
    }
    return false;
  });
   // show menu c2
   var demshowmenuc2=0;
   $('.btn-down.c2').click(function(event) {
    console.log('ahhi');
    demshowmenuc2++;
    if(demshowmenuc2%2!=0)
    {
      // $(this).parent('sub-menu-c2')
      $(this).parent('.sub-menu-c2').children('.wraper-menu-c2').css('position', 'static');
      $(this).parent('.sub-menu-c2').children('.wraper-menu-c2').css('opacity', '1');
      $(this).parent('.sub-menu-c2').children('.wraper-menu-c2').css('visibility', 'visible');
      $(this).parent('.sub-menu-c2').children('.wraper-menu-c2').css('display', 'block');
    }else{
      $(this).parent('.sub-menu-c2').children('.wraper-menu-c2').css('position', 'static');
      $(this).parent('.sub-menu-c2').children('.wraper-menu-c2').css('opacity', '0');
      $(this).parent('.sub-menu-c2').children('.wraper-menu-c2').css('visibility', 'hidden');
      $(this).parent('.sub-menu-c2').children('.wraper-menu-c2').css('display', 'none');
    }

    return false;
  });
   // check màn hình
   $windowWidth = $(window).width();
   if($windowWidth<991){
    $('.sub-menu-c2').addClass('is-mobile');
  }else{
    $('.sub-menu-c2').removeClass('is-mobile');
  }
  $(window).resize(function() {
    if($windowWidth<991){
      $('.sub-menu-c2').addClass('is-mobile');
    }else{
      $('.sub-menu-c2').removeClass('is-mobile');
    }

  });
});  
