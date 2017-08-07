$(document).ready(function(){

  $('#refreshBtn').click(function(){
    loadMessages();
  });
$('#deleteBtn').click(function(){
  $('#messagesList').empty();
});

});

  function getBaseUrl(){
    return window.location.protocol + "//" +window.location.hostname + ":" + window.location.port;
  }

  function loadMessages(){
       var baseUrl = getBaseUrl();

    var config = {
        url: baseUrl + '/messages',
        method: 'get',
        timeout: 30000,
        dataType:'json',
        success: function(data,status,xhrOptions){

            $('#messagesList').empty(); //empty the list before it has anything
          var list = '<li class="list-group-item"> #name #when sent #message </li>';

          var messages = data.map(function(item){
            return list.replace('#name', item.name)
                        .replace('#when', item.when)
                        .replace('#message', item.message);
          });

          $('#messagesList').append(messages.join(''));
        },
        error: function(){
            toastr.info('sorry Error occured');
        },
        complete: function(){

        }
  };

          $.ajax(config);

  }
