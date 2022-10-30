// 사이드바 '위로가기' 버튼
// $(window).on('load', function(){
//     $('.side .top').css('display', 'none'),
//     $('#sideart .side li:last-child').css({marginBottom: '10px'})
// })

// 화면 스크롤시 위치에 따른 사이드바 변화
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    var x3 = $('.art3').offset().top;
    var x4 = $('.art4').offset().top;
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

// 헤더 depth2 slide down
$('.depth1 >li').hover(
    function(){
        if($('html').hasClass('pc')){
            $(this).find('.depth2').slideDown(300)
    }},
    function(){
        if($('html').hasClass('pc')){
        $(this).find('.depth2').slideUp(100)
    }}
)


// .art3 more버튼 내용 추가
$('#section .art3 .more').on('click', function(){
    $('.art3').find('.addmore').slideToggle()
    return false
})

// .art4 more버튼 내용 추가
$('#section .art4 .more').on('click', function(){
    $('.art4').find('.addmore').slideToggle()
    return false
})


// 모바일) 사이드버튼 클릭시 메뉴 팝업
$('#sideart').on('click', function(){
    if($('html').hasClass('mobile')){
        $(this).addClass('ver2').append('<div class="closenav"><i class="fa-solid fa-xmark"></i></div>')
        $('.side').css({display:'flex'})
    }
})

$('body').on('click', '.closenav, .top', function(){
    $('#sideart').removeClass('ver2')
    $('#sideart .closenav').remove()
    $('.side').css({display:'none'})
})

// article offset
// $('#header .mainlogo').on('click', function(){
//     var r=$('.art3').height()
//     alert(r)
// })

// .art5 ul li 호버시 이미지 회전 like LP판
$('.art5 ul li a').hover(
    function(){
        $(this).addClass('fa-spin').siblings('.pin').addClass('stick').css({opacity:'1'})
    },
    function(){
        $(this).removeClass('fa-spin').siblings('.pin').removeClass('stick').css({opacity:'0'})
    }
)

// $(window).on('load', function(){
//     $('.art1 .slick-active').siblings().css({display:'none'})
// })




// $('.forfun').on('click', function(){
//     if($('.art1 >div').hasClass('vid1')){
//         $(this).removeClass('vid1').addClass('vid2').css({display:'block'})
//     } else if($('.art1 >div').hasClass('vid2')){
//         $(this).removeClass('vid2').addClass('vid3').css({display:'block'})
//     } else if($('.art1 >div').hasClass('vid3')) {
//         $(this).removeClass('vid3').addClass('vid1').css({display:'block'})
//     }
// })

// .art5 아이템 클릭시 새창으로 팝업
// function video(){
//     var vid1='https://www.youtube.com/watch?v=mEyUzQUH-IY'
//     vid2='https://www.youtube.com/watch?v=br55HOfMUc4'
//     vid3='https://www.youtube.com/watch?v=0c45lWXZruo'
//     vid4='https://www.youtube.com/watch?v=GDD8OPLdOIg'
//     ind=$('.art5 ul li').index()
//     console.log(ind)

//     $('.art5 ul li').on('click', function(){
//         $(this).eq(ind).open('width=200px, height=150px','_blank')
//     })

// }

// test)핸드폰 가로 세로 크기 구하기
// $('#header .mainlogo').on('click', function(){
//     var wid=$(window).width()
//     var hei=$(window).height()
//     alert(wid)
//     alert(hei)

// }
