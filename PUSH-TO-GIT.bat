@echo off
REM Quick Git Push Script
REM This script helps you quickly commit and push changes to GitHub

echo ================================
echo   Git Quick Commit ^& Push
echo ================================
echo.

REM Check if there are any changes
git status

echo.
echo Enter your commit message (describe what you changed):
set /p commit_message="Commit message: "

if "%commit_message%"=="" (
    echo Error: Commit message cannot be empty!
    pause
    exit /b 1
)

echo.
echo Adding all changes...
git add .

echo Committing changes...
git commit -m "%commit_message%"

echo Pushing to GitHub...
git push

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Push failed! Make sure you have:
    echo 1. Connected to GitHub (see GIT-AND-VERCEL-SETUP.md)
    echo 2. Internet connection
    echo 3. Correct repository permissions
    pause
    exit /b 1
)

echo.
echo ================================
echo SUCCESS! Changes pushed to GitHub
echo Vercel will automatically deploy in 1-2 minutes
echo ================================
echo.
pause
