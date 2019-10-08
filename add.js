// Question: What does this code do?
$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
      name: $("#name").val().trim(),
      phone: $("#phone").val().trim(),
      email: $("#phone").val().trim(),
      uniqueId: $("#uniqueId").val().trim(),
    };

    // Question: What does this code do??
    $.post("/api/reservation", )
      .then(function(data) {
        console.log("add.html", data);
        alert("You're reservation has been added");
      });
  });