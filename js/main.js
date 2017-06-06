// ------------ PROJECTS EFFECT -----------

$(document).ready(function (){
  $("div.col-xs-6.project1").hover(function() {
    $("h2.title1").show();
  }, function() {
    $("h2.title1").hide();
  });

  $("div.col-xs-6.project2").hover(function() {
    $("h2.title2").show();
  }, function() {
    $("h2.title2").hide();
  });

  $("div.col-xs-6.project3").hover(function() {
    $("h2.title3").show();
  }, function() {
    $("h2.title3").hide();
  });

  $("div.col-xs-6.project4").hover(function() {
    $("h2.title4").show();
  }, function() {
    $("h2.title4").hide();
  });

  // ANIMATED SKILL BARS

  $(".html").animate({width:'95%'},2200);
  $(".javascript").animate({width:'60%'},2200);
  $(".php").animate({width:'55%'},2200);
  $(".photoshop").animate({width:'75%'},2200);
  $(".css").animate({width:'80%'},2200);
  $(".angular").animate({width:'70%'},2200);
  $(".swift").animate({width:'85%'},2200);
  $(".illustrator").animate({width:'100%'},2200);

});
