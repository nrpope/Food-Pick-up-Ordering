$(document).ready(function() {
  $("#showCartBtn").click(function() {
    console.log("Sup");
    const orderId = $("#order-id").data("orderid");
    $.ajax({
      url: `api/order/${orderId}`,
      method: "GET",
      success: resp => {
        console.log("Item count:", resp.data.length);
      },
      error: () => {
        console.log("showOrders failed");
      }
    });
  });
});
