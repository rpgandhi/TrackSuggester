$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var code = $("select#whyCode").val();
    var platform = $("select#whichPlatform").val();
    var interest = $("select#mostInteresting").val();
    var mobileSelect = $("select#mobileOption").val();
    var nameInput = $("input#name").val();
    var desktopch = $("select#desktopChoice").val();

    $(".hideResults").hide();
    $(".userName").text(nameInput);
    $("#results").show();

    if (code === "prodev" && platform === "mobile" && mobileSelect === "androidDev") {
      $("#java").show();
    } else if (code === "prodev" && platform === "mobile" && mobileSelect === "windowsDev") {
      $("#cSharp").show();
    } else if (code === "prodev" && platform === "web" && interest === "howInteract") {
      $("#html").show();
    } else if (code === "prodev" && platform === "web" && interest === "howWork") {
      $("#ruby").show();
    } else if (code === "prodev" && platform === "desktop" && desktopch === "cross") {
      $("#java").show();
    } else if (code === "prodev" && platform === "desktop" && desktopch === "wind") {
      $("#cSharp").show();
    }
    if (code === "buildFun" && platform === "mobile" && mobileSelect === "androidDev") {
      $("#java").show();
    } else if (code === "buildFun" && platform === "mobile" && mobileSelect === "windowsDev") {
      $("#cSharp").show();
    } else if (code === "buildFun" && platform === "web" && interest === "howInteract") {
      $("#html").show();
    } else if (code === "buildFun" && platform === "web" && interest === "howWork") {
      $("#ruby").show();
    } else if (code === "buildFun" && platform === "desktop" && desktopch === "cross") {
      $("#java").show();
    } else if (code === "buildFun" && platform === "desktop" && desktopch === "wind") {
      $("#cSharp").show();
    }

    event.preventDefault();

  });
});
