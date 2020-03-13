// const textCustomer = require("../../routes/SMS");

$(document).ready(function() {
  $("#showCartBtn").click(function() {
    event.preventDefault();
    console.log("Sup");
    $.ajax({
      url: `/br`,
      method: "GET",
      success: resp => {
        console.log("Item count:");
        // textCustomer();
      },
      error: () => {
        console.log("showOrders failed");
      }
    });

    $.ajax({
      url: `/br/orders`,
      method: "POST",
      data: {}
    });
  });
});
