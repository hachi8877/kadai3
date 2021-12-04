$('.js-modal-open').on('click',function(){
  $('.js-modal').fadeIn();
  return false;
});

$('.js-modal-close').on('click',function(){
  $('.js-modal').fadeOut();
  return false;
});

$("#sp_menu_open").on("click", function(){
  $("#menu").slideDown(800);
  $(this).fadeOut("normal");
  $("#sp_menu_close").fadeIn("normal");
});

$("#sp_menu_close").on("click", function(){
  $("#menu").slideUp(800);
  $(this).fadeOut("normal");
  $("#sp_menu_open").fadeIn("normal");
});