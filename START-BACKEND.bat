@echo off
echo ========================================
echo  Hotel Maa Annapurna - Backend Server
echo ========================================
echo.

cd hotel-maa-annapurna-backend

echo Checking Node.js...
node --version
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Checking if dependencies are installed...
if not exist "node_modules\" (
    echo Installing dependencies...
    npm install
)

echo.
echo Starting backend server...
echo Keep this window open!
echo.
npm start

pause
