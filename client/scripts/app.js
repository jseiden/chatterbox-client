// YOUR CODE HERE:
var app = {
  server: 'https://api.parse.com/1/classes/chatterbox'
};

app.init = function(){

};

app.send = function(message){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
      console.log(data);
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};

var userObjects = {};
app.fetch = function(){
  $.ajax({
    // always use this url
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: JSON.stringify(),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
      console.log(data);
      // userObjects = data;
      app.listFriends(data);
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.listFriends = function(userObjects){
  for(var i=0; i<userObjects.results.length; i++){
    console.log(userObjects.results[i].username);
    $("#friendsList").append("<li class='friendLI'>" + userObjects.results[i].username + "</li>");
  }
};

app.clearMessages = function(){
  $('#chats').empty();
};

app.addMessage = function(message){
  $('#chats')
    .append('<div class="message"><span class = "username">' + message.username +'</span><br><span class="text">' + message.text + '</span><br><span class="room">' + message.roomname + '</span></div>');
};

app.addRoom = function(string){
  $("#roomSelect").append("<p>" + string + "</p>");
};


app.addFriend = function(){

};
$("#listFriendsButton").on("click", function(){
  alert("hi");
});


















