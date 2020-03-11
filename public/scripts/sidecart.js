$(document).ready(function() {
  $(function() {
    // hide tweet box on page load
    $(".menu").hide();

    // toggles the compose tweet container
    $("#menu-category").click(function() {
      $(".menu").toggle("slide");
    });
  });

  $(".example_c").click(function(event) {
    event.preventDefault();
    let item_id = 1;
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
    //loads all tweets on page
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
