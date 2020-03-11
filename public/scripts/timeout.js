$(document).ready(function() {
  $(function() {
    // hide timout box
    $(".timeout").hide();

    // toggles timeout box and hides confirm box
    $(".button_cont").click(function() {
      $(".timeout").toggle("slide");
      $(".processing").hide();
    });
  });
  // $(".button_cont").click(function(event) {
  //   event.preventDefault();
  // });
});
