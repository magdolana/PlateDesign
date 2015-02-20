# BUILDING

1) You don't need to change the source code in order to use the ls-seed framework. Based on the ls-seed framework, you can include your own CSS, JS and HTML files.

2) It is a client-end APP built by Grunt (Windows and Mac version) and Cordova (Android, iOS version).

### Setup Environment
+ Make sure you have properly set up your environment before continuing on this page.
+ [Setup](setup.md)

###Clone Repo and Install Development and Client Dependencies
In the command line:

1. `git clone https://github.com/LabShare/ls-seed.git`

Please make sure you have read and write permission of the folder where you clone and store the ls-seed project!

2. Switch to the folder where you stored the ls-seed project.

3. `npm install //use 'sudo npm install' if permissions needed`

4. `bower install`

###Set names for project
In the package.json file, you will see two properties that you can configure for your application
+ name: The name of your project
+ mobilePackageName: Name for the package of the mobile application in the form 'com.example.hello'

### Run Native Application(Windows, OSX, Linux32, Linux64)
1. Build native applications by running command `grunt build`
2. This will generate an application for each platform in the release folder
3. The release path is '/release/<project name>/' where you'll find a folder for each platform
4. For OSX, Linux, and Windows, you'll find an executable that can be run. For mac, run the node-webkit exe on the nw.pak file


###Making mobile applications

####Before you bake mobile application
1) Apache Cordova makes it possible for us to use the same code (html, js and css) to build mobile applications.
You just need to install different platform SDKs.

2) More API documentation can be found at this url:
http://cordova.apache.org/docs/en/3.5.0//guide_cli_index.md.html#The%20Command-Line%20Interface


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

#### Builds iOS and Android apps
1) cd..
// Move to 'ls-seed/cordova/lsseed' folder

2) cordova platform add android

3) cordova platform add ios

4) cordova plugin add org.apache.cordova.console

5) cordova plugin and org.apache.cordova.inappbrowser

6) cordova build

#### Deploy to Android Emulator and iOS Simulator
1)cordova emulate android
// For android

When you cange your code in the future, you can just type: 'cordova android run' or 'cordova ios run' in order to bake the APP.

2)Click Run on the Simulator.
// For iOS

###Testing Steps

1. Make sure all dependencies are installed using npm install and bower install.
2. grunt test
    - The browser used for unit tests can be changed in test/karma.conf.js
    - Code coverage reports are generated in test/coverage
    - New unit test files need to end in '_Spec' in order to be found by karma