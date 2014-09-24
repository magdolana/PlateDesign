##ls-seed project
This project can be built using "Nodebob".
It support Windows,Mac,iOS and Android.
Besides, there are some prerequisites before you build ls-seed project. 


###Environment you need to prepare.
1) Install nodebob from https://github.com/geo8bit/nodebob

2) Install ls-seed project from https://github.com/LabShare/ls-seed

3) Copy ls-seed source file to one of the nodebob folder --'../../nodebob/app'.(Path depends on where you locate your nodebob)

4) Install the latest version of nodejs from  http://nodejs.org/

5) In command line :

go to the folder '../../nodebob/app' with cd in command line then:

npm install requirejs

npm superagent

go to the folder ../../nodebob/app/update/js with cd in command line then:

npm install adm-zip

npm install progress

npm install superagent

6) Download and install Netbean or Webstorm

###Server configure.
1) Install any server: Nginx, Tomcat...

2) Configure your server host location (127.0.0.1:80) to 'nodebob/app/serverEnd' folder

3) Test your server by inputing: http://127.0.0.1:80. If you can see the welcome pages, then you are good.

Check out the configure file 'nodebob/app/serverEnd/nginx.conf' when using Nginx.

4) For mobile version (ios or android), you need to edit the updaterCtrl.js in mobile/public/js/controllers.

Try to change the serverAddress to your local IP.

###Nodebob configure
1) LS-seed project rewrite the nodebob script for Windows and Mac. Take your time to understand the scripts first.

2) Copy three scripts: build-combine.bat, build.osx update.sh and build.osx ls-seed.sh) into the nodebob root folder.(along with original build.bat)

###Windows plantform Build steps
1) Run the 'nodebob/build-combine-ls-seed-win.bat' script..

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
1) Move 'nodebob/app/update' folder to somewhere else and run the 'nodebob/app/build-ls-seed-app.sh' scirpt..

2) Delete all the files in nodebob/app folder and copy the original update folder to 'nodebob/app'

3) Run the script 'build.osx update.sh'

2) Go to release folder. There should be two .app files exist: 'release.osx/ls-seed.app' and 'release.osx/update.app'

3) Open folder 'nodebob/release' in NetBeans or WebStorm.

4) Drag the whole update.app to the 'nodebob/release/ls-seed.app/Contents/Frameworks' folder.
(Never use copy and paste. Otherwise it won't work)

Tips: Make your own copy of 'update.app' to somewhere else first!!

###Test on Mac OSX plantform.
1) Run 'nodebob/release/ls-seed.app'. There is a 'about' button to the right.

2) Click on the about button. If you see any errors, it may be caused by server path error.

3) If local version is lower than server version, there will be a button 'update now'.Otherwise it will show a message 'Newest version'.

4) There will be a dialog to ask if you want continue or not. Click on OK. This will close the 'ls-seed.app' and run '/ls-seed.app/Contents/Frameworks/update.app'

5) Once 'update.app' has been executed, it will download the newest version from the serverEnd and extract it to test folder
(or you can overwrite the older files by disable debug mode.)

6) 'update.app' will call newest 'ls-seed.app' then close itself.


##Tips: In order to disable debug mode. Edit 'XXX/update/js/install.js' and change variable debug to false.

###Making mobile applications
Apache Cordova make it possible for us using the same code(html, js and css) to build mobile applications.
You just need to install different platform sdk.

More API document can be found at this url:
http://cordova.apache.org/docs/en/3.5.0//guide_cli_index.md.html#The%20Command-Line%20Interface

###Build steps

###1) Make a folder in apps directory
$ cd nodebob/app/mobile

Target the android folder as our cordova folder

$ mkdir cordova
      
Create cordova folder inside the /nodebob/app/mobile

$ cd cordova

go to this new folder

###2) Install cordova at the folder 'nodebob/app/mobile/cordova'

$ npm install -g cordova

ps: if you don't have the permission please use 'sudo to grant the permission'

###3) Create the App
$ cordova create lsseed com.example.lsseed LsSeed

ps: This lsseed App is just a framework with some default settings. 

We need to go to 'app/mobile/cordova/lsseed/www' and replace all the files with our lseed source files.

###4) Add project files
Delete the index.html, js, img and css folders inside www.folder.

$ cd lsseed/www 

$ rm -r index.html js css img

###5) copy our lsseed source files into this folder
Copy files and folders below:

nodebob/app/mobile/public  

nodebob/app/mobile/views

nodebob/app/mobile/License

nodebob/app/mobile/app.ico

nodebob/app/mobile/index.html

nodebob/app/mobile/package.json

nodebob/app/mobile/skull-icon.png

to  'mobile/cordova' folder

or you can do this in command line:

$ cp -r ../../../public

$ cp -r ../../../views

$ cp -r ../../../License

$ cp -r ../../../app.ico

$ cp -r ../../../index.html

$ cp -r ../../../package.json

$ cp -r ../../../skull-icon.png

###6) install android and iOS sdk

For Android

1) Download and install the android SDK. After downloading, make sure that you have "tools and platform-tools" in path

2) Download and install JAVA and ANT into your machine. After that, make sure you have 'JAVA_HOME\bin' and 'ANT_HOME' 

3) run android and install v19 (or newest version) API and SDK tools

4) more details please check out document for Android:
http://cordova.apache.org/docs/en/3.5.0//guide_platforms_android_index.md.html#Android%20Platform%20Guide

For IOS
Install Xcode and upgrade to newest version.

###7) Builds iOS and Android apps
Move to apps/cordova/lsseed folder
cd ..
$ cordova platform add android
$ cordova platform add ios
$ cordova plugin add org.apache.cordova.console
$ cordova plugin and org.apache.cordova.inappbrowser

$ cordova build

###8) Deploy to Android Emulator and iOS Simulator
1)For android
$ cordova emulate android

2)For iOS
Click Run on the Simulator.