if (window.innerWidth <= 1000) {
  $(".row").css("display", "none");
  $(".select").css("display", "flex");
}

$(".filter-option").click(function(event) {
  // remove selected attribute from previous selection
  $("option:selected").removeAttr("selected");
  // make all elements white
  $(".filter-option").addClass("unclicked");
  // make clicked element pink
  $("#" + event.target.id).removeClass("unclicked");
  $("#" + event.target.id).addClass("clicked");
  // select element in dropdown menu as well
  $(".select option[value="+ event.target.id +"]").attr("selected", "selected");
});

var mql = window.matchMedia("(max-width: 1000px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 700 pixels wide or less */
    $(".row").css("display", "none");
    $(".select").css("display", "flex");
  } else {
    $(".select").css("display", "none");
    $(".row").css("display", "flex");
  }
}

mql.addListener(screenTest);

$(".select").change(function() {
  var selectedOption = $(this).children("option:selected").val();
  // make all elements white
  $(".filter-option").addClass("unclicked");
  // make clicked element pink
  $("#" + selectedOption).removeClass("unclicked");
  $("#" + selectedOption).addClass("clicked");
});
