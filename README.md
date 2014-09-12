##ls-seed project
This project can be built using "Nodebob" which is really easy to use.
Besides, there are some prerequisites before you build ls-seed project. 

Install nodebob
Install the latest version of node.js
Install the latest requirejs
Install the latest superagent.
Install the latest adm-zip
Install the latest progress
Install a server listening 80 port
Install Netbean or Webstorm(Any IDE can take a look inside the *.app is fine)
We use 'npm' to install most of our project dependencies.

###Windows plantform Build steps
1) download ls-seed project.

2) download "nodebob" from https://github.com/geo8bit/nodebob

3) copy ls-seed project(all the source file) to 'nodebob/app' folder

4) cut the file 'nodebob/app/build-combine.bat' to 'nodebob root folder'.

5) make sure the root of your server is started and has been point to 'nodebob/app' folder

6) run the 'nodebob/app/build-combine.bat' script. It should create two apps in release folder.


###Test on Windows plantform.

1) go to release folder. There are two .exe file. ls-seed.exe and update.exe(in update folder)

2) double click on ls-seed.exe there is a button on the right about.

3) click on the about button. If you see any errors. it may be caused by server path error.

4) If local version is lower than server version, there will be a button 'update now' click on that otherwise it will show a message 'Newest version'

5) There will be a dialog. Click on OK. This will close the ls-seed.exe and activate update.exe

6) Once update.exe has been activate it will download the newest version from the server and extract it to test folder(or you can overwrite the older files by disable debug mode)

7) update.exe will call newest version of ls-seed.exe then close itself.


###Mac OS X plantform Build steps
1) Download ls-seed project to a any folder with permission.

2) Download "nodebob" from https://github.com/geo8bit/nodebob to a folder with permission.

3) Cut 'build-update-app.sh' and 'build-ls-seed-app.sh' to nodebob root. We will run it later.

3) Copy ls-seed project source files(except .sh files) and folders to 'nodebob/app' folder

4) Run the shell script(build-update-app.sh) and get 'update.app' in the release folder.

4) Run the shell script(build-ls-seed-app.sh) and get 'update' in the release folder

5) Since we have update.app and ls-seed.app in the release folder, please use NetBeans or WebStorm or any IDE will be able to look insite the '*.app' 
Move the whole update.app (Never use copy otherwise it won't work) to the ls-seed.app/Contents/Frameworks folder.
Tips: Make your own copy of update.app first!!\n
Copy update.app to that location will never work in Netbeans IDE

6) Now you have integrate update.app into ls-seed.app


###Test on Mac OS X plantform.

1) go to release folder. 

2) Double click on ls-seed.app.(Be sure you have already integrate update.app into it) It will open ls-seed app.

3) Click on the about button. If you see any errors. it may be caused by server path error.

4) If local version is lower than server version, there will be a button 'update now' click on that otherwise it will show a message 'Newest version'

5) There will be a dialog. Click on OK. This will close the ls-seed.app activate update.app

6) Once update.app has been activate it will download the newest version from the server and extract it to test folder(or you can overwrite the older files by disable debug mode)

7) 'update.app' will call newest version of ls-seed.app then close itself.


###Tips: In order to disable debug mode. Go to Site Root/update/js/install.js and change the value to false.