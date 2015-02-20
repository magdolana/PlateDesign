#Setup Environment

###Needed globals

+ Nodejs - is an event-driven, non-blocking I/O model and comes with the Node Package Manager(npm)
+ grunt-cli - The command line interface for Grunt, a javascript task runner.
+ bower - a package manager for the web. Is used to manage ui client dependencies

####For Mobile Apps
+ Cordova - platform for building native mobile applications using HTML, CSS, and Javascript

####For SASS
#####Ruby - dynamic open-source programming language
+ For more platform-specific instructions, go to: (https://www.ruby-lang.org/en/documentation/installation/)
+ Once ruby is installed update ruby environment with command `gem update --system`

#####Compass - an open-source CSS Authoring Framework
+ Once ruby is installed can install compass with command `gem install compass`

#### Installing node
1. Navigate to (nodejs.org) and follow the install instructions for your system
2. Verify global access to node by running command `node --version` in the terminal/console
3. If something other than a version number is output, may need to update PATH for node and npm

####Installation of other globals
The rest of the globals can be installed using the node package manager.
`npm install -g grunt-cli bower cordova`
