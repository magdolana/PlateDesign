##ls-seed project
1)Ls-Seed project is a pure framework using AngularJS, RequireJS and NodeJS webkit to build an APP for Windows, Mac, Android and IOS plantform.

2)You don't need to change the source code in order to use the ls-seed framework. Based on the ls-seed framework, you can include your own CSS, JS and HTML file. 

3)It is an cliend-end APP built by grunt(Windows and Mac version) and cordova (Android, ios version).

###Making Windows and Mac  applications.

###Build steps
In the command line:

0) git clone https://github.com/LabShare/ls-seed.git. 

// Please make sure you have read and write permission of the folder where you clone and stored the ls-seed project!

1) Switch to the folder where you stored ls-seed project, then do step 2.

2) cd ls_seed

3) npm install
   
4) cd ls_seed_source

5) npm install

6) cd..

7) grunt build

8) cd..
//switch to the ls-seed root folder.

###Run the Windows and Mac APP
You can find the app in ls-seed/ls_seed/release/ls_seed folder. There will be two folders one is for Windows another is for Mac.


###Making mobile applications

####Before you bake mobile application
1) Apache Cordova make it possible for us using the same code(html, js and css) to build mobile applications.
You just need to install different platform sdk.

2) More API document can be found at this url:
http://cordova.apache.org/docs/en/3.5.0//guide_cli_index.md.html#The%20Command-Line%20Interface


###Build steps

0) In the command line, please make sure you are in the root folder. All the source file for mobile version have been stored in mobile 

#### Create the APP
1) cd mobile
//Target the android folder as our cordova folder

2) mkdir cordova
//Create cordova folder inside the mobile

3) cd cordova
//go to this new folder

4) npm install -g cordova
//Install cordova at the folder 'mobile/cordova'
//if you don't have the permission please use 'sudo to grant the permission'

5) cordova create lsseed com.example.lsseed LsSeed 
//Create the a framework App named lsseed with default settings.
//We need to go to 'app/mobile/cordova/lsseed/www' and replace all the files with our lseed source files.

#### Copy the source file
6) cd cordova/lsseed/www
//Switch to 'www' folder

7) rm -r index.html js css img
//Delete the index.html, js, img and css folders inside 'www'.folder.

8) copy our lsseed source files in folder 'mobile' into 'mobile/cordova/lsseed/www' folder

In command line:

cp -r ./../../../public

cp -r ./../../../views

cp -r ./../../../License

cp -r ./../../../app.ico

cp -r ./../../../index.html

cp -r ./../../../package.json

cp -r ./../../../skull-icon.png


#### install android and iOS sdk
After you finished the step 8 above. Please install android and ios sdk.

For Android

1) Download and install the android SDK. After downloading, make sure that you have "tools and platform-tools" in path

2) Download and install JAVA and ANT into your machine. After that, make sure you have 'JAVA_HOME\bin' and 'ANT_HOME' 

3) run android and install v19 (or newest version) API and SDK tools

4) more details please check out document for Android:
http://cordova.apache.org/docs/en/3.5.0//guide_platforms_android_index.md.html#Android%20Platform%20Guide

For IOS
Install Xcode and upgrade to newest version.

### Builds iOS and Android apps
1) cd..
//Move to apps/cordova/lsseed folder
2) cordova platform add android
3) cordova platform add ios
4) cordova plugin add org.apache.cordova.console
5) cordova plugin and org.apache.cordova.inappbrowser
6) cordova build

###8) Deploy to Android Emulator and iOS Simulator
1)cordova emulate android
//For android


2)Click Run on the Simulator.
//For iOS
