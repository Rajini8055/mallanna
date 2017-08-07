$(document).ready(function() {
  $("body").height($(window).height());
  $("body").delegate(".new-button", "click", newNote);
  $("body").delegate(".delete-button", "click", deleteNote);
  newNote();

  function newNote() {
    var temp = $("#note-template").html();
    $("<div class='note'></div>").html(temp)
      .appendTo("#note-space");
  }

  function deleteNote() {
    $(this).parents(".note").remove();
  }
});
