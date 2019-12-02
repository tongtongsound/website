  $(".btnTracks").on("click", function() {
  $(".aboutContent, .cdContent, .contactContent").css("display", "none");
  $(".tracksList").css("display", "block");
  $(".tracksList").css("opacity", "1");
  $(".tracksList").css("visibility", "visible");
});

$(".btnAbout").on("click", function() {
  $(".tracksList, .cdContent, .contactContent").css("display", "none");
  $(".aboutContent").css("display", "block");
  $(".aboutContent").css("opacity", "1");
  $(".aboutContent").css("visibility", "visible");
});

$(".btnCD").on("click", function() {
$(".tracksList, .aboutContent, .contactContent").css("display", "none");
$(".cdContent").css("display", "block");
});

$(".btnContact").on("click", function() {
$(".tracksList, .cdContent, .aboutContent").css("display", "none");
$(".contactContent").css("display", "block");
$(".contactContent").css("opacity", "1");
$(".contactContent").css("visibility", "visible");
});
