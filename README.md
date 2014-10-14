##ls-seed project
This project can be built using "Grunt".
It support Windows,Mac,iOS and Android.
Besides, there are some prerequisites before you build ls-seed project. 

###Server configure.
1) Install any server: Nginx, Tomcat...

2) Configure your server host location (127.0.0.1:80) to 'serverEnd' folder

3) Test your server by inputing: 'http://127.0.0.1:80'. If you can see the welcome pages, then you are good.

Check out the configure file 'nodebob/app/serverEnd/nginx.conf' when using Nginx.

4) For mobile version (ios or android), you need to edit the updaterCtrl.js in mobile/public/js/controllers.

Try to change the serverAddress to your local IP.


###Making Windows and Mac  applications.
0) make sure you have read and write permission of the folder where you stored the ls-seed project.

1) In command line: switch to ls-seed folder, then do step 2.

2) cd ls_seed                   //switch to ls-seed/ls_seed folder

3) npm install                  //install node and grunt dependencies
   
4) cd ls_seed_source            //switch to ls-seed/ls_seed/ls_seed_source

5) npm install                  //install node dependencies for ls_seed APP

6) cd..                         //switch to ls_seed

7) grunt build                  //build the ls_seed app in the folder 'release'

8) cd..                         //switch to ls-seed root folder

9) cd update                    //swtich to ls-seed/update folder

10) npm install                 //install node and grunt dependencies

11) cd update_source            //switch to ls-seed/update/update_source folder

12) npm install                 //install node dependeices for update APP

13) cd..                        //switch to ls-seed/update folder

14) grunt build                  //build the update app

15) You can find the app in ls-seed/ls_seed/release/ls_seed folder. There are two folder one is for Windows another is for Mac.



###Making mobile applications
Apache Cordova make it possible for us using the same code(html, js and css) to build mobile applications.
You just need to install different platform sdk.

More API document can be found at this url:
http://cordova.apache.org/docs/en/3.5.0//guide_cli_index.md.html#The%20Command-Line%20Interface

###Build steps
###0) install nodebob first. (https://github.com/geo8bit/nodebob)

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