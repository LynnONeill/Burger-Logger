
console.log("insanity check");

$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("click works");
        let newBurger = {
            name: $("#burger-add").val().trim(),
            eaten: 0
        };
        console.log("this is the new burger");
        console.log(newBurger);

        // Send the PUT request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("added new burger called " + newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        )
    });

    $(".devour").on("click", function (event) {
        event.preventDefault();
        console.log("devour click works");
    });













})