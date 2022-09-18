// map
$('#secmap a').mouseover(
    function(){
    var img=$(this).attr('data-img');
    var h2=$(this).attr('data-h2');
    var p=$(this).attr('data-p');

    $('.txt img').attr({src:img})
    $('.txt h2').text(h2)
    $('.txt p').text(p)
})

// index


// test
$('#header .mainlogo').on('click', function(){
    $('point:eq(0)').css('width', '500px')
    
})
// test


$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    var x = (($('.art4').offset().top)-($('.art3').offset().top))/2
    if(sct>=x){
        $('#sideart h2').css('color', '#000'),
        $('.side .top a i').css('color', '#000')
    } else {
        $('#sideart h2').css('color', '#fff'),
        $('.side .top a i').css('color', '#fff')
    }
})

$('.mainlogo').on('click', function(){
    if($(this).hasClass('.mainlogo')){
        $('.side h2').css('color','#fff');
    } else {
        $('.side h2').css('color','#000');
    }
})



// park


