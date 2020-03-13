$(document).ready(function() {
  $(function() {
    // hide tweet box on page load
    $(".menu").hide();

    // toggles the compose tweet container
    $("#menu-category").click(function() {
      $(".menu").toggle("slide");
      $(".fas").hide("slide");
      $(".cno").hide("slide");
    });
  });

  $("#hotdog").click(function(event) {
    event.preventDefault();
    let item_id = 1;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/br", //"/br/orders/"
          success: () => {
            console.log("success on GET");
            loadItems();
          },
          error: () => {
            console.log("error on GET");
          }
        });
        console.log("Success on POST for addItem");
      },
      error: () => {
        console.log("POST to order/add failed");
      }
    });
  });

  $("#soda").click(function(event) {
    event.preventDefault();
    let item_id = 3;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/br", //"/br/orders"
          success: () => {
            console.log("success on GET");
          },
          error: () => {
            console.log("error on GET");
          }
        });
        console.log("Success on POST for addItem");
      },
      error: () => {
        console.log("POST to order/add failed");
      }
    });
  });

  $("#fries").click(function(event) {
    event.preventDefault();
    let item_id = 2;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/br", //"/br/orders"
          success: () => {
            console.log("success on GET");

          },
          error: () => {
            console.log("error on GET");
          }
        });
        console.log("Success on POST for addItem");
      },
      error: () => {
        console.log("POST to order/add failed");
      }
    });
  });

  const loadOrders = function() {
    //loads all tweets on page
    $.ajax({
      url: "/br", //"/br/orders"
      method: "GET",
      success: () => {
        console.log("loadOrders worked");
      },
      error: () => {
        console.log("loadOrders failed");
      }
    });
  };

  const newOrderForm = function(newOrder) {
    //dynamic submission form
    let $newOrder = $(`
      <article class="order_tally">
      <p class=${newOrder.orders.id}</p>
      </article>
    `).addClass("order_tally");
    console.log("new order form");
    return $newOrder;
  };
  loadOrders();




  const renderOrderItem = function(orderItem){
    // console.log('order item?????????????????????????????', orderItem)
    const id = orderItem.id;
    const name = orderItem.name;
    const order_id = orderItem.order_id;
    const quantity = orderItem.quantity;
    const price = orderItem.price;
    const $item = `
        <p>
          id: ${id} <br>
          order_id: ${order_id} <br>
          quantity: ${quantity} <br>
          price: ${quantity * price} <br>
        </p>
    `
    return $item;
  }

  const renderItems = function (items) {
    console.log("renderitem", items);
    const itemArray = items.order_items

    $("#orderItemsList").empty();
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let i = 0; i < itemArray.length; i++) {
      //console.log(items);

      let $item = renderOrderItem(itemArray[i]);
      $("#orderItemsList").prepend($item);
    }
  }

  const loadItems = function () {
    $.get("/api/order", function (data) {
      renderItems(data);
      //console.log(data);
    });
  }
  loadItems()




});
