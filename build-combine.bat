@echo off

set CUR_DIR="%CD%"
set ICO_PATH=%CUR_DIR%\app\app.ico
set NWEXE_PATH=%CUR_DIR%\buildTools\nw\nw.exe
set NWZIP_PATH=%CUR_DIR%\release\app.nw
set HEDWIG_EXE_PATH=%CUR_DIR%\release\Hedwig.exe

set UPDATE_PATH=%CUR_DIR%\release\update\update.exe
set UPDATE_ICO_PATH=%CUR_DIR%\app\update\app.ico
set UPDATE_NWZIP_PATH=%CUR_DIR%\release\update\app.nw

SETLOCAL EnableDelayedExpansion
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
  set "DEL=%%a"
)

call :ColorText 0C "nodebob v0.1"
echo.
call :ColorText 0C "---"
echo.
echo.

if not exist release md release

echo.
call :ColorText 0a "Creating app package..."
cd buildTools\7z
7z a -r- -tzip %NWZIP_PATH% ..\..\app\node_modules ..\..\app\public ..\..\app\views ..\..\app\app.ico ..\..\app\index.html ..\..\app\info.plist ..\..\app\package.json ..\..\app\README.md ..\..\app\skull-icon.png
cd ..\..

echo.
call :ColorText 0a "Creating executable..."
echo.
copy /b /y %NWEXE_PATH% %HEDWIG_EXE_PATH%
cd buildTools\ar
if exist %ICO_PATH% Resourcer -op:upd -src:%HEDWIG_EXE_PATH% -type:14 -name:IDR_MAINFRAME -file:%ICO_PATH%
copy /b /y %HEDWIG_EXE_PATH% + %NWZIP_PATH% %HEDWIG_EXE_PATH%
cd ..\..

echo.
call :ColorText 0a "Copying files..."
echo.
if not exist %CUR_DIR%\release\ffmpegsumo.dll	copy %CUR_DIR%\buildTools\nw\ffmpegsumo.dll	%CUR_DIR%\release\ffmpegsumo.dll
if not exist %CUR_DIR%\release\icudt.dll	copy %CUR_DIR%\buildTools\nw\icudt.dll		%CUR_DIR%\release\icudt.dll
if not exist %CUR_DIR%\release\libEGL.dll	copy %CUR_DIR%\buildTools\nw\libEGL.dll		%CUR_DIR%\release\libEGL.dll
if not exist %CUR_DIR%\release\libGLESv2.dll	copy %CUR_DIR%\buildTools\nw\libGLESv2.dll	%CUR_DIR%\release\libGLESv2.dll
if not exist %CUR_DIR%\release\nw.pak		copy %CUR_DIR%\buildTools\nw\nw.pak		%CUR_DIR%\release\nw.pak

echo.
call :ColorText 0a "Deleting temporary files..."
echo.
del %NWZIP_PATH%


echo.
call :ColorText 0a "Creating update package..."
cd buildTools\7z
7z a -r -tzip %UPDATE_NWZIP_PATH% ..\..\app\update\*
cd ..\..

echo.
call :ColorText 0a "Creating update.exe"
echo.
copy /b /y %NWEXE_PATH% %UPDATE_PATH%
cd buildTools\ar
if exist %UPDATE_ICO_PATH% Resourcer -op:upd -src:%UPDATE_PATH% -type:14 -name:IDR_MAINFRAME -file:%UPDATE_ICO_PATH%
copy /b /y %UPDATE_PATH% + %UPDATE_NWZIP_PATH% %UPDATE_PATH%
cd ..\..

echo.
call :ColorText 0a "Copying files..."
echo.
if not exist %CUR_DIR%\release\update\ffmpegsumo.dll	copy %CUR_DIR%\buildTools\nw\ffmpegsumo.dll	%CUR_DIR%\release\update\ffmpegsumo.dll
if not exist %CUR_DIR%\release\update\icudt.dll		copy %CUR_DIR%\buildTools\nw\icudt.dll		%CUR_DIR%\release\update\icudt.dll
if not exist %CUR_DIR%\release\update\libEGL.dll	copy %CUR_DIR%\buildTools\nw\libEGL.dll		%CUR_DIR%\release\update\libEGL.dll
if not exist %CUR_DIR%\release\update\libGLESv2.dll	copy %CUR_DIR%\buildTools\nw\libGLESv2.dll	%CUR_DIR%\release\update\libGLESv2.dll
if not exist %CUR_DIR%\release\update\nw.pak		copy %CUR_DIR%\buildTools\nw\nw.pak		%CUR_DIR%\release\update\nw.pak

echo.
call :ColorText 0a "Deleting temporary files..."
echo.
del %UPDATE_NWZIP_PATH%




echo.
call :ColorText 0a "Copying VERSION file..."
echo.
if not exist %CUR_DIR%\release\VERSION copy %CUR_DIR%\app\VERSION %CUR_DIR%\release\VERSION

echo.
call :ColorText 0a "VERSION file copy complete!"
echo.
goto :eof

echo.
call :ColorText 0a "Done!"
echo.
goto :eof


:ColorText
echo off
<nul set /p ".=%DEL%" > "%~2"
findstr /v /a:%1 /R "^$" "%~2" nul
del "%~2" > nul 2>&1
goto :eof