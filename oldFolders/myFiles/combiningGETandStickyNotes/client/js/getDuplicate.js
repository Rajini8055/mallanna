$(function(){
  $('#refreshBtn').click(function(){
    loadMessages();
  });
  $('#deleteBtn').click(function(){
    $('#messagesList').empty();
  });

});

  function baseUrl(){
    return window.location.protocol+'//'+window.location.hostname+':'+window.location.port;
  }

function loadMessages(){
  var baseUrl = this.baseUrl();

  var config = {
      url: baseUrl + '/messages',
      method: 'get',
      timeout: 30000,
      dataType:'json',
    success:function(data){
        $('#messagesList').empty();
      var list = '<li>#name #when sent #message</li>';

      var messages =   data.map(function(item){ //.map(object,index)--this is only array var kk={key:value} kk.key
        return list.replace('#name',item.name)
                    .replace('#when',item.when)
                    .replace('#message', item.message);
      });
      $('#messagesList').append(messages.join(''));  //messages = ["data","data","",""]

    },
    error:function(){
      toastr.info('error occured');
    }
  }

  $.ajax(config);
}
