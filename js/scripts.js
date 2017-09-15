// function clearForm() {
//   $("#quizForm").val("");
// }

$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var code = $("select#whyCode").val();
    var platform = $("select#whichPlatform").val();
    var interest = $("select#mostInteresting").val();
    var mobileSelect = $("select#mobileOption").val();
    var nameInput = $("input#name").val();

    $(".hideResults").hide();
    $(".userName").text(nameInput);
    $("#results").show();

    if (code === "prodev" && platform === "mobile" && mobileSelect === "androidDev") { //&& age === "young" && interest === "Male"){
      $("#java").show();

    } else if (code === "prodev" && platform === "mobile" && mobileSelect === "windowsDev") {
      $("#cSharp").show();
    } else if (code === "prodev" && platform === "web" && interest === "howInteract") {
      $("#html").show();
    } else if (code === "prodev" && platform === "web" && interest === "howWork") {
      $("#ruby").show();
    }

    /*} else if (interest != "Male") {
      $("#fy").toggle();
    } else if (gender === "Female" && age === "mid" && interest === "Male") {
      $("#fmm").toggle();
    } else if (interest != "Male") {
      $("#fmf").show();
    } else if (gender === "Female" && age === "old" && interest === "Male") {
      $("#fom").show();
    } else if (interest != "Male") {
      $("#fof").show();
    } else if (gender === "Male" && age === "young" && interest === "Female") {
      $("#myf").show();
    } else if (interest != "Female") {
      $("#mym").show();
    } else if (gender === "Male" && age === "mid" && interest === "Female") {
      $("#mmf").show();
    } else if (interest != "Female") {
      $("#mmm").show();
    } else if (gender === "Male" && age === "old" && interest === "Female") {
      $("#mof").show();
    } else if (interest != "Female") {
      $("#mom").show();
    }*/
    event.preventDefault();

    // clearForm();
  });
});
