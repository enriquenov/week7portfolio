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

  $(".html").animate({width:'100%'},1200);
  $(".javascript").animate({width:'92%'},1200);
  $(".php").animate({width:'87%'},1200);
  $(".photoshop").animate({width:'100%'},1200);
  $(".css").animate({width:'96%'},1200);
  $(".angular").animate({width:'87%'},1200);
  $(".swift").animate({width:'96%'},1200);
  $(".illustrator").animate({width:'100%'},1200);

});
