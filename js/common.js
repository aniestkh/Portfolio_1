// 화면창 크기에 따라 pc, mobile 구분
function init(){
  var ww=$(window).width()

  if(ww>=1024){
      $('html').addClass('pc').removeClass('mobile tablet')
  } else if (ww>=768 && ww<1024) {
    $('html').addClass('tablet').removeClass('mobile pc')
  } else {
      $('html').addClass('mobile').removeClass('tablet pc')
  }
}

init()

$(window).on('resize load', function(){init()})

// 헤더_햄버거바
  $('.ham i').on('click', function(){
    if($(this).hasClass('Noteaten')){
      $('.ham img').addClass('iamfull').css({transform:'translateX(35px)'})
      $(this).removeClass('Noteaten').fadeOut(200)
      $('.menu .hidden').slideDown(200)
      // $('.menu .hidden').addClass('animate__bounceInDown animate__animated')
    }
  })
  $('.ham img').on('click', function(){
    if($('.ham img').hasClass('iamfull')){
      $('.ham i').addClass('Noteaten').fadeIn(100)
      $(this).removeClass('iamfull').css({transform:'translateX(0)'})
      $('.menu .hidden').slideUp(100)
      // $('.menu .hidden').backOutDown(300)
    }
  })
  
// 첫 화면 로드시 로딩화면 출력
$(window).on('load', function(){
  var count=0;
  function add(){
      count++
      $('.outer').text(count+'%')
      if(count===100){
          clearInterval(timer)
          $('.outer').css({color:'yellow'}).delay(100).fadeOut(300)
      }
  }
  var timer=setInterval(add, 10)
})

