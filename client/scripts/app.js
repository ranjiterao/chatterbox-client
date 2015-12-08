var app = {
  server: 'https://api.parse.com/1/classes/chatterbox',

  addFriend: function(username) {},

  handleSubmit: function() {
    console.log("handleSubmit was called")
  }, 

  init: function() {
    console.log('init ran')
    $('#chats').on('click', '.username', function() {
      console.log('clicked')
      var username = $(this).text();
      app.addFriend(username);
    })

    $('#send').on('submit', function(event) {
      event.preventDefault();
      console.log('clicked');
      app.handleSubmit();
    })
  },

  send: function(message) {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: app.server,
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
  },

  fetch: function() {

    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: app.server,
      type: 'GET',
      data: 'jsonp',
      success: function(data) {

        for (var i = 0; i < data.results.length; i++) {
          var origText = data.results[i].text;
          var origUsername = data.results[i].username;
          $('<div>').text(origText).appendTo('#chats');
        }
      }
    });
  },

  clearMessages: function() {
    $('#chats').empty();
  },

  addMessage: function(message) {
    $('<div><span class="chat username">' + message.username + '</span>' + message.text + '</div>').appendTo('#chats');
  },

  addRoom: function(roomName) {
    $('<option>' + roomName + '</option>').appendTo('#roomSelect');
  }

};




