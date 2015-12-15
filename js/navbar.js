// windowが860px以上だとメニューを表示。
$(function(){
  $(".menuButton").click(function(){
    $(".menu").slideToggle(100);
    return false;
  });

  $(window).resize(function(){
    var win = $(window).width();
    var size = 630;
    if(win > size){
      $(".menu").show();
    } else {
      $(".menu").hide();
    }
  });
});