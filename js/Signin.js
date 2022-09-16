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