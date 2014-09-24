##ls-seed project
This project can be built using "Nodebob" which is really easy to use.
Besides, there are some prerequisites before you build ls-seed project. 


###Environment you need to prepare.
Install nodebob from https://github.com/geo8bit/nodebob

Install ls-seed project from https://github.com/LabShare/ls-seed

Copy ls-seed source file to ../../nodebob/app folder.

Install the latest version of node.js

In command line :

go to the ../../nodebob/app folder then:
npm install requirejs
npm superagent

go to the ../../nodebob/app/update/js folder then:
npm install adm-zip
npm install progress
npm install superagent

Install Netbean or Webstorm

###Server configure.
1) Install any server: Nginx, Tomcat...

2) Configure your server host location (127.0.0.1:80) to 'nodebob/app/serverEnd' folder

3) Test your server by inputing: http://127.0.0.1:80. If you can see the welcome pages, then you are good.

###Nodebob configure
1) LS-seed project rewrite the nodebob script for Windows and Mac. Take your time to understand the scripts first.

2) Copy three ls-seed nodebob scripts (build-combine.bat, build.osx update.sh and build.osx ls-seed.sh) into the nodebob root folder.(along with original build.bat)

###Windows plantform Build steps
1) Run the 'nodebob/app/build-combine.bat' script..

2) Go to release folder. There should be two .exe files exist: 'release/ls-seed.exe' and 'release/update/update.exe'

###Test on Windows plantform.
1) Run ls-seed.exe. There is a button on the right about.

2) Click on the about button. If you see any errors, it may be caused by server path error.

3) If local version is lower than server version, there will be a button 'update now'.Otherwise it will show a message 'Newest version'.

4) There will be a dialog to ask if you want continue or not. Click on OK. This will close the 'ls-seed.exe' and activate 'update.exe'

5) Once 'update.exe' has been executed, it will download the newest version from the serverEnd and extract it to test folder
(or you can overwrite the older files by disable debug mode.)

6) 'update.exe' will call newest ls-seed.exe then close itself.

7) Go to folder 'release/update.exe' and run it. This will call update.exe alone. If there is newer version, it will download it and run it.

###Mac OS X Build steps
1) Move nodebob/app/update folder to somewhere else and run the 'nodebob/app/build-ls-seed-app.sh' scirpt..

2) Delete all the files in nodebob/app folder and copy the original update folder to 'nodebob/app'

3) Run the script 'build.osx update.sh'

2) Go to release folder. There should be two .app files exist: 'release.osx/ls-seed.app' and 'release.osx/update.app'

3) Open folder 'nodebob/release' in NetBeans or WebStorm.

4) Drag the whole update.app to the 'nodebob/release/ls-seed.app/Contents/Frameworks' folder.
(Never use copy and paste. Otherwise it won't work)

Tips: Make your own copy of 'update.app' first!!

###Test on Mac OSX plantform.
1) Run 'nodebob/release/ls-seed.app'. There is a 'about' button to the right.

2) Click on the about button. If you see any errors, it may be caused by server path error.

3) If local version is lower than server version, there will be a button 'update now'.Otherwise it will show a message 'Newest version'.

4) There will be a dialog to ask if you want continue or not. Click on OK. This will close the 'ls-seed.app' and run '/ls-seed.app/Contents/Frameworks/update.app'

5) Once 'update.app' has been executed, it will download the newest version from the serverEnd and extract it to test folder
(or you can overwrite the older files by disable debug mode.)

6) 'update.app' will call newest 'ls-seed.app' then close itself.

###Tips: In order to disable debug mode. Go to Site 'Root/update/js/install.js' and change the value to false.