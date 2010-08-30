Node Boilerplate
=================
node-boilerplate takes html-boilerplate, express, connect and Socket.IO and organizes them into a ready to use website project. Its a fast way to get working on your Node website without having to worry about the setup. It takes care of all the boring parts, like setting up your views, 404 page, 500 page, getting the modules organized, etc... 

Node Boilerplate has 4 goals:

1. To end the repetition involved with starting a new Node website project
2. To never install anything outside of the project directory (For easier production deployment)
3. To make it easy to install additional modules within the project directory
4. To enable easy upgrade or freezing of project dependencies  


To start a project:
		
		git clone git://github.com/robrighter/node-boilerplate.git mynewproject
		cd mynewproject
		./bin/initproject.sh
This will copy down all of the boilerplate files organize them appropriately and init a fresh new git repository within which you can build your next big thing.



To run the boilerplate template app:

		node server.js

Go to http://0.0.0.0:8081 and click on the send message link to see socket.io in action.



To add additional modules:

You can git clone any other modules into the lib folder. Any modules cloned into the git folder can be required as global modules ie.. require('somemodule').

**If you have a different set of default modules that you like to use, the structure is setup such that you can fork the project and replace the modules in the lib directory and the initproject.sh script will initialize projects with your new set of modules.** 

