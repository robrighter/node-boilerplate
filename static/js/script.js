/* Author: 

*/

$(document).ready(function() {   
   var socket = io.connect();
   $('#sender').bind('click', function() {
     socket.send("Message Sent on " + new Date());     
   });
   
   socket.on('message', function(msg){
     $('#reciever').append('<li>' + msg + '</li>');  
   });
      
 });






















