var colorList = ['#FFDC48', '#F67F7F', '#FD6BA6', '#67D384', '#B0C9E8'];

var setNameColor = function(color){
     currentcolor = color;
     $('#name').css("background-color", color);   
 };
 
 var grabRandomColor = function(){
     return colorList[Math.floor(Math.random()*colorList.length)];
 };

 var changeColor = function(){
     setNameColor(grabRandomColor());
 };

var formatMessageHtml = function(messagejson){
   if(messagejson.hasOwnProperty('color') && messagejson.hasOwnProperty('name') && messagejson.hasOwnProperty('comment')){
       var t = _.template("<div class='messageitem' style='display : none;'><span class='name' style='color: <%= color %>;'><%= name %>:</span> <span class='comment'><%= comment %></span></div>"); 
       return t(messagejson);    
   }
   else {
       return "";
   }
   
};

var insertMessage = function(messagejson){
    socket.send(JSON.stringify(messagejson));
    $('#comment').val('');
};

var incomingMessage = function(messagejson){
    var toadd = $(formatMessageHtml(messagejson));
    $('#chatfeed').append(toadd);
    toadd.slideDown(200);
    $('#chatfeed').animate({ scrollTop: $('#chatfeed').attr("scrollHeight") }, 200);
};

var packageJsonMessage = function(){
    return {   color : currentcolor
             , name : $('#name').val()
             , comment : $('#comment').val() 
           };
};

var currentcolor = grabRandomColor();

var socket;
 
$(document).ready(function() {   
   $('#sendbutt').bind('click', function() {
        insertMessage(packageJsonMessage());
   });
   
   $('#talkform').submit(function(){
        insertMessage(packageJsonMessage());
        return false;
   });
   
   $('#changecolor').bind('click', function(){
        changeColor();
        return false;
   });
   
   setNameColor(currentcolor);
   
   
   io.setPath('/client/');
   socket = new io.Socket(null, { port: 8765
     , transports: ['websocket', 'htmlfile', 'xhr-multipart', 'xhr-polling']
     });
   socket.connect();
   
   socket.on('message', function(data){
     incomingMessage(JSON.parse(data));  
   });
      
 });
