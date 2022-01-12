$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#person").val();

    $(".person").text(nameInput);

    $("#letter-text").show();
  });


});