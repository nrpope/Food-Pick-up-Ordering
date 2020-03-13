import { textRestaurant } from "./SMS";

$(document).ready(function() {
  $("#showCartBtn").click(function() {
    textRestaurant();
  });
});
