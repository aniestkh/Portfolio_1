// '중복확인'버튼 클릭시 사진변경
$('#section #signbox .personalinfo #id .id +.idbtn').on('click', function(){
  var photo = '#section #signbox .photo';
  
  if($(photo).hasClass('photo-change')){
      $(photo).removeClass('photo-change');
  }else {
      $(photo).addClass('photo-change');
  }
  return false
})

// 가입하기버튼 클릭
$('.psbtn .enter').on('click', function(){
  function returntomain(){
    window.open('./index.html');
  }

  if(window.confirm('가입하시겠습니까?','')){
    $('#signbox').slideUp(300)
    window.alert('가입이 완료되었습니다.')
  }
  returntomain()
  return false
})

// 생년월일_연도
function year(){
  for(i=0; i<=20; i++) {
    if(i>=10){
      $('.year').append('<option value=20'+i+'년>20'+i+'년</option>')
    } else {
      $('.year').append('<option value=200'+i+'년>200'+i+'년</option>')
    }
  }
}
year()

// 생년월일_월
function month(){
  for(i=1; i<=12; i++) {
    $('.month').append('<option value='+i+'월>'+i+'월</option>')
  }
}
month()

// 생년월일_일
function day(){
  for(i=1; i<=31; i++) {
    $('.day').append('<option value='+i+'일>'+i+'일</option>')
  }
}
day()