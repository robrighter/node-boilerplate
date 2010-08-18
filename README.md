Node Boilerplate
=================
node-boilerplate takes html-boilerplate, express, connect and Socket.IO and organizes them into a ready to use website project. Its a fast way to get working on your Node website without having to worry about the setup. It takes care of all the boring parts, like setting up your views, 404 page, 500 page, getting the modules organized, etc... 

Node Boilerplate has 3 goals:

1. To end the repetition involved with starting a new Node website project
1. To never install anything outside of the project directory (For easier production deployment)
2. To make it easy to install additional modules within the project directory 


To start a project:
		
		git clone git://github.com/robrighter/node-boilerplate.git mynewproject
		cd mynewproject
		sh ./bin/initproject.sh
This will copy down all of the boilerplate files organize them appropriately and init a fresh new git repository within which you can build your next big thing.



To run the boilerplate template app:

		node ./project/app.js

Go to http://0.0.0.0:8081 and click on the send message link to see socket.io in action.



To add additional modules:

You can git clone any other modules into the lib folder. Any modules cloned into the git folder can be required as global modules ie.. require('somemodule').

