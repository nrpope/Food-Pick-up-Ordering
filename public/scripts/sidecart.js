$(document).ready(function() {
  $(function() {
    // hide tweet box on page load
    $(".menu").hide();

    // toggles the compose tweet container
    $("#menu-category").click(function() {
      $(".menu").toggle("slide");
    });
  });
  $(".hotdogbtn").submit(function(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/"
    }).then(() => {});
  });
});
