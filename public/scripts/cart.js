// const textCustomer = require("../../routes/SMS");

$(document).ready(function() {
  $("#showCartBtn").click(function() {
    event.preventDefault();
    console.log("Sup");
    const orderId = $("#order-id").data("orderid");
    $.ajax({
      url: `api/orders`,
      method: "GET",
      success: resp => {
        console.log("Item count:", resp.data.length);
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
