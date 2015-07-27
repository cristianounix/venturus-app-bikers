$(document).ready(function() {
  $(".open, .close").click(function(){
    $(".open, .close").hide();
    $("#content-help").toggle(function(){
      if($(this).css('display')=='none'){
        $('.open').show();
      } else{
        $('.close').show();
      }
    });
  });
});