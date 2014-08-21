nw-app
======

node webkit app seed project

This seed project made by:
1. AngularJS
2. RequireJS
3. NodeJS webkit

It contained really simple idea of how to create a APP with all these techonologies.

How to run it:

1. install node

2. run: npm install requirejs

3. Download Nodebob:https://github.com/geo8bit/nodebob
TIPs: How to use Nodebob:
a. unzip
b. put all your source files in the folder "app". make sure package.json and index.html not in another folder. 
Please include app.ico and Info.plist if you are baking Mac App.There two files are necessary for Mac System.

c. double click build.bat/ build.osx.sh/ build.linux.sh
d. look for your app in folder "release"

Please feel free to contact with me if you find any bugs.

8-15 update Please replace your build.bat with the build-combine.bat.

8-21
Newest version now be able to update the program as we want.
1. Run Hedwig.exe
2. Click the button on the right corner.
3. In the about.html page.  It will look for the newest version 127.0.0.1/serverEnd/package.json  if remote version is better, will suggest user to update
4. There will be a button shown up once newest version is on the server.
5. Once click on the OK, Hedwig.exe will cal update.exe then close itself.
6. update.exe will look for files on the serverend ->download->decompress->overwrite->restart->close itself
7. Because we are still test the seed. Pleaes look for the newest version in the  test folder. Thank you.

If you find any bugs, plesae let me know. ^_^
--------------------------------
