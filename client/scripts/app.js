$('button').on('click', function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify('&amp&lt&gt' + $('#message').val()),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
})

$.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: 'text',
    contentType: 'application/json',
    success: function (data) {
      console.dir(data)
      var chats = data.results;

      for (var i = 0; i < chats.length; i++) {
        $('<div id="&amp&lt&gt' + chats[i].username + '"><span class="chat username">@' + chats[i].username + ': </span>' + chats[i].text + '</div>').appendTo('#chats');
      }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to get messages');
    }
  });

