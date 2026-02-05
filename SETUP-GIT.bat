@echo off
REM Initial Git Setup Script
REM Run this ONCE to set up your Git repository and connect to GitHub

echo ========================================
echo   Initial Git Repository Setup
echo ========================================
echo.

echo Step 1: Configuring Git user information
echo.
set /p git_name="Enter your name: "
set /p git_email="Enter your email: "

git config --global user.name "%git_name%"
git config --global user.email "%git_email%"

echo.
echo Step 2: Adding all files to Git
git add .

echo.
echo Step 3: Creating initial commit
git commit -m "Initial commit: Hotel Maa Annapurna website"

echo.
echo ========================================
echo ✓ Local Git repository is ready!
echo ========================================
echo.
echo NEXT STEPS:
echo.
echo 1. Create a new repository on GitHub:
echo    - Go to https://github.com/new
echo    - Repository name: hotel-maa-annapurna
echo    - Do NOT initialize with README
echo    - Click "Create repository"
echo.
echo 2. Copy your GitHub repository URL
echo.
set /p github_url="Paste your GitHub repository URL: "

if "%github_url%"=="" (
    echo.
    echo No URL provided. You can connect later using:
    echo git remote add origin YOUR_GITHUB_URL
    echo git push -u origin main
    pause
    exit /b 0
)

echo.
echo Step 4: Connecting to GitHub
git remote add origin %github_url%

echo.
echo Step 5: Renaming branch to main
git branch -M main

echo.
echo Step 6: Pushing to GitHub
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Push failed!
    echo You may need to authenticate with GitHub.
    echo See the troubleshooting section in GIT-AND-VERCEL-SETUP.md
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✓ SUCCESS! Repository connected to GitHub
echo ========================================
echo.
echo Your code is now on GitHub!
echo Next: Deploy to Vercel (see GIT-AND-VERCEL-SETUP.md)
echo.
pause
