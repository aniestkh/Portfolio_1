// 사이드바 '위로가기' 버튼
// $(window).on('load', function(){
//     $('.side .top').css('display', 'none'),
//     $('#sideart .side li:last-child').css({marginBottom: '10px'})
// })

// 화면 스크롤시 위치에 따른 사이드바 변화
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    var x = $('.art4').offset().top;
    var x5 = $('.art5').offset().top;
    var fb=$('#footer').offset().top;
    var pmw=$('html').hasClass('pc');

    // 윈도우) 화면 스크롤시 특정 위치에서 사이드바 발생
    if(sct>=x-1200 && pmw){
        $('#sideart h2, .side .top a i').css('color', '#000'),
        $('.side .top').css({display:'block'}),
        $('#sideart').css({display:'block'})
    } else if(sct<x-1200 && pmw) {
        $('#sideart').css({display:'none'})
    }

    // 윈도우) 화면이 푸터에 닿으면 사이드바의 모양 변경
    if(sct>=x5+30 && pmw){
        $('#sideart').addClass('square')
        $('#sideart .side >li').css({float:'left', margin:'0 3px'}),
        $('.side .top').css({position:'absolute', bottom:'30px', right:'35px'})
    } else if(sct<=x5 && pmw){
        $('#sideart').removeClass('square')
        // .css({width:'100px',padding:'0 10px 10px',background:'#dddddd66', position:'fixed', top:'0', bottom:'auto'}),
        $('#sideart .side >li').css({float:'none', margin:'0'}),
        $('.side .top').css({position:'initial'})
    }
    
})

// 모바일) 사이드버튼 클릭시 메뉴 팝업
$('#sideart').on('click', function(){
    $(this).addClass('ver2').append('<div class="closenav"><i class="fa-solid fa-xmark"></i></div>')
    $('.side').css({display:'flex'})
})

$('body').on('click', '.closenav', function(){
    $('#sideart').removeClass('ver2')
    $('#sideart .closenav').remove()
    $('.side').css({display:'none'})
})

// $('#sideart').on('click', function(){
//     if($(this).hasClass('ver2')){
//         $(this).removeClass('ver2').find('.closenav').remove()
//         $('.side').css({display:'none'})
//     } else {
//         $(this).addClass('ver2').append('<div class="closenav"><i class="fa-solid fa-xmark"></i></div>')
//         $('.side').css({display:'flex'})
//         $('.side li').css({width:'30%'})
//         $('.side h2').css({color:'black'})
//         $('.side .top').css({display:'block'})
//         $('.side .top i').css({color:'black'})
//     }
// })

