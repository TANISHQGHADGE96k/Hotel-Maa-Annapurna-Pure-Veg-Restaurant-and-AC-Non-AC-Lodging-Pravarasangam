@echo off
echo ==========================================
echo  Hotel Maa Annapurna - Setup Database
echo ==========================================
echo.

echo This script will set up your database.
echo.
echo Prerequisites:
echo  1. MySQL must be running (XAMPP or standalone)
echo  2. MySQL root password (press Enter if no password)
echo.

set /p db_password="Enter MySQL root password (or press Enter): "

echo.
echo Creating database...
mysql -u root -p%db_password% -e "CREATE DATABASE IF NOT EXISTS hotel_maa_annapurna;"

if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Could not create database. Make sure MySQL is running!
    pause
    exit /b 1
)

echo Database created successfully!
echo.

cd hotel-maa-annapurna-backend

echo Importing schema...
mysql -u root -p%db_password% hotel_maa_annapurna < schema.sql

if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Could not import schema!
    pause
    exit /b 1
)

echo Schema imported successfully!
echo.

echo Adding sample room data...
mysql -u root -p%db_password% hotel_maa_annapurna < seed-rooms.sql

if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Could not import sample rooms. You can add them manually later.
) else (
    echo Sample rooms added successfully!
)

echo.
echo ==========================================
echo  Database setup complete!
echo ==========================================
echo.
echo Next steps:
echo  1. Double-click START-BACKEND.bat to start the server
echo  2. Open index.html with Live Server
echo.

pause
