$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done(users => {
    for (user of users.users) {
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
    for (category of categories.categories) {
      $("<div>")
        .text(category.name)
        .appendTo($("body"));
    }
  });

// const renderOrderItem = function(orderItem){
//   const id = 1;
//   const name = "hot doggu";
//   const order_id = 10;
//   const quantity = 1;
//   const price = 200;
//   const $item = `
//       <p>
//         id: ${id} <br>
//         name: ${name} <br>
//         order_id: ${order_id} <br>
//         quantity: ${quantity} <br>
//         price: ${quantity * price} <br>
//       </p>
//   `
//   return $item;
// }

// const renderItems = function (items) {
//   console.log("renderitem", items);

//   // loops through tweets
//   // calls createTweetElement for each tweet
//   // takes return value and appends it to the tweets container
//   for (let i = 0; i < items.order_items.length; i++) {
//     console.log(items);

//     let $item = renderOrderItem(items[i]);
//     $("#orderItemsList").prepend($item);
//   }

// }

// const loadItems = function () {
//   $.get("/api/order", function (data) {
//     renderItems(data);
//     //console.log(data);
//   });
// }
// loadItems()

});



// $(() => {
//   const orderId = $("#order-id").data("orderid");
//   console.log("i can use this order id now: ", orderId);
//   $(".example_c").on("click", () => {
//     console.log("you want a hot dog!, lets add it to order#: ", orderId);
//     const testData = { order_id: orderId, quantity: 999, price: 0 };
//     $.ajax({
//       url: `/api/order/add/${orderId}`,
//       method: "POST", //POST
//       data: testData // ...order item u want to add to this order
//     }).then(
//       res => {
//         console.log("res from server!", res);
//         res.json({});
//       }
//       //   (res) => { ... }, // on success
//       //   (err) => { ... } // if it errors
//     );
//   });
// });

// $(() => {
//   const orderId = $("#order-id").data("orderid");
//   console.log("i can use this order id now: ", orderId);
//   $(".example_c").on("click", () => {
//     console.log("you want a hot dog!, lets add it to order#: ", orderId);
//     const testData = { order_id: orderId, quantity: 999, price: 0 };
//     $.ajax({
//       url: `/api/order/add/${orderId}`,
//       method: "POST", //POST
//       data: testData // ...order item u want to add to this order
//     }).then(
//       res => {
//         console.log("res from server!", res);
//         res.json({});
//       }
//       //   (res) => { ... }, // on success
//       //   (err) => { ... } // if it errors
//     );
//   });
// });

// $(() => {
//   const orderId = $("#order-id").data("orderid");
//   console.log("i can use this order id now: ", orderId);
//   $(".example_c").on("click", () => {
//     console.log("you want a hot dog!, lets add it to order#: ", orderId);
//     const testData = { order_id: orderId, quantity: 999, price: 0 };
//     $.ajax({
//       url: `/api/order/add/${orderId}`,
//       method: "POST", //POST
//       data: testData // ...order item u want to add to this order
//     }).then(
//       res => {
//         console.log("res from server!", res);
//         res.json({});
//       }
//       //   (res) => { ... }, // on success
//       //   (err) => { ... } // if it errors
//     );
//   });
// });

// End of experimental code
