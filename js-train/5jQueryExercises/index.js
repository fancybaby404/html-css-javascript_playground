$("h1").css("color", "red");
$("h1").removeClass("joe");
$("h1").addClass("lmao");
$('h1').html("<em>joe<em>");

$(document).on('keydown', function (event) {
    keyPress = event.key;
    $("h1").text(keyPress);
});

$("h1").on("keydown", function() {
  $("h1").animate({
    color: "blue"
  });
});