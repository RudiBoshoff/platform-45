// RUDI BOSHOFF

// BLACK TOGGLE BUTTON ANIMATIONS
$(".item-1-toggle img").click(function() {
  $(".item-2").toggleClass("hidden");
  $(".item-3").toggleClass("hidden");
  $(".item-1-toggle img").toggleClass("rotate");
});



// EMAIL ERROR CSS STYLING
$("input[name=email]").change(function() {
  if ($("input[name=email]").is(":invalid")) {
    // invalid email address
    $(".email label").addClass("invalid");
    $(".email span").removeClass("hidden");
  } else {
    // valid email address
    $(".email label").removeClass("invalid");
    $(".email span").addClass("hidden");
  }
});

// CANCEL BUTTON REMOVE INVALID EMAIL CSS STYLING
$("input[name=cancel").click(function() {
  $(".email label").removeClass("invalid");
  $(".email span").addClass("hidden");
})
