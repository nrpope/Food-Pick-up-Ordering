$(document).ready(function() {
  $(function() {
    $(".menu").hide();
    $(".order_list").hide();
    // $(".weirdFlex").hide();

    // toggles the compose tweet container
    $("#menu-category").click(function() {
      $(".menu").show("slide");
      $("#menu-category").hide();
    });
  });

  $("#hotdog").click(function(event) {
    $(".order_list").show("slide");
    event.preventDefault();
    let item_id = 4;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/br/orders",
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

  $("#soda").click(function(event) {
    $(".order_list").show("slide");
    event.preventDefault();
    let item_id = 4;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/br/orders",
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
    $(".order_list").show("slide");
    event.preventDefault();
    let item_id = 4;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/br/orders",
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

  $("#chips").click(function(event) {
    $(".order_list").show("slide");
    event.preventDefault();
    let item_id = 4;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/br/orders",
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

  $("#cookies").click(function(event) {
    $(".order_list").show("slide");
    event.preventDefault();
    let item_id = 4;
    // alert("ready to add item" + item_id);
    $.ajax({
      method: "POST",
      url: `/api/order/add/${item_id}`,
      success: () => {
        $.ajax({
          method: "GET",
          url: "/br/orders",
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
    //loads orders on page
    $.ajax({
      url: "/br/orders",
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
});
