// $('#submit').on('click', function() {
//   console.log('clicked')
//   var messageObj = {};

//   // messageObj.username = window.location.search.split('=')[1];

//   messageObj.text = $('#message').val();

//   messageObj.roomname = '4chan';

//   console.log(messageObj);

//   return messageObj;
// });

// $('button').on('click', function() {
// })

var app = $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: '',
    contentType: 'application/json',
    success: function (data) {
      console.dir(data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to get messages');
    }
  });

app.init = function() {}

app.send = function(message) {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
  
}

app.fetch = function(message) {
  return $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: message,
    type: 'GET',
    data: '',
    contentType: 'application/json',
    success: function (data) {
      console.dir(data)
      // app.addMessage(data)

      for (var i = 0; i < chats.length; i++) {
        $('<div id="&amp&lt&gt' + chats[i].username + '"><span class="chat username">@' + chats[i].username + ': </span>' + chats[i].text + '</div>').appendTo('#chats');
      }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to get messages');
    }
  })
};

app.clearMessages = function() {
  $('#chats').empty();
}

app.addMessage = function(message) {
  $('<div><span class="chat username">@' + message.username + ': </span>' + message.text + '</div>').appendTo('#chats');
}

app.addRoom = function(roomName) {
  $('<option>' + roomName + '</option>').appendTo('#roomSelect');
}





















