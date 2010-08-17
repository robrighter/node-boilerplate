Node Boilerplate
=================
node-boilerplate takes html-boilerplate, express, connect and Socket.IO and organizes them into a ready to use website project. Its a fast way to get working on your Node website without having to worry about the setup.


To start a project:
		
		git clone git://github.com/robrighter/node-boilerplate.git mynewproject
		cd mynewproject
		sh ./bin/initproject.sh


To run the boilerplate template app:

		node ./project/app.js
(click on the send message link to see socket.io in action)



To add additional modules:

You can git clone any other modules into the lib folder. Any modules cloned into the git folder can be required as global modules ie.. require('somemodule').

