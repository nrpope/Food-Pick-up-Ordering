$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done(users => {
    for (user of users) {
      $("<div>")
        .text(user.name)
        .appendTo($("body"));
    }
  });
});

// Experimental code to help with displaying database
$(() => {
  $.ajax({
    method: "GET",
    url: "/api/categories"
  }).done(categories => {
    for (category of categories) {
      $("<div>")
        .text(category.name)
        .appendTo($("body"));
    }
  });
});

$(() => {
  console.log("do u see this?");
  const orderId = $("#order-id").data("orderid");
  console.log("i can use this order id now: ", orderId);
  $(".example_c").on("click", () => {
    console.log("you want a hot dog!, lets add it to order#: ", orderId);
    // fire of ajax here with order id
    // pseudo-code
    const testData = { order_id: orderId, quantity: 999 };
    $.ajax({
      url: `/api/order/add/2`, //${orderId}
      method: "POST", //POST
      data: testData // ...order item u want to add to this order
    }).then(
      res => {
        console.log("res from server!", res);
      }
      //   (res) => { ... }, // on success
      //   (err) => { ... } // if it errors
    );
  });
});

// End of experimental code
