$("button.more").mouseenter(function() {
  $(this).addClass('animated tada');
});

$("button.more").mouseleave(function() {
  $(this).removeClass('animated tada');

});

$("button.more").click(function() {
  $("button.more").hide();
  $("div.moreprojects i").fadeIn(1500);
});


// carousel features

$("#four2").click(function() {
  // $(this).removeClass("fa-circle-o");
  // $(this).addClass("fa-circle");
});
