$(document).ready(function(){
    $('#clickBtn').click(function(){
    var enterText = $('#userInput').val();
    var $li = $('<li>').addClass('itemDetails').text(enterText);
    $('#addItem').prepend($li);
    $('#userInput').val('');
  });

});
