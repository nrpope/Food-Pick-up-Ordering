$(document).ready(function() {
  $(function() {
    // hide tweet box on page load
    $(".menu").hide();

    // toggles the compose tweet container
    $("#menu-category").click(function() {
      $(".menu").toggle("slide");
    });
  });

  $(".button_cont").click(function(event) {
    event.preventDefault();
    let item_id = 1;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/api/order",
          success: () => {
            console.log("success on GET");
          },
          error: () => {
            console.log("error on GET");
          }
        });
        console.log("nothing bad happened yet");
      },
      error: () => {
        console.log("shit shit");
      }
    });
  });
});
