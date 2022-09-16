$('#secmap a').mouseover(
  function(){
  var img=$(this).attr('data-img');
  var h1=$(this).attr('data-h1');
  var p=$(this).attr('data-p');

  $('.txt img').attr({src:img})
  $('.txt h1').text(h1)
  $('.txt p').text(p)
})
