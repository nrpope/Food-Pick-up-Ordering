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

// End of experimental code
