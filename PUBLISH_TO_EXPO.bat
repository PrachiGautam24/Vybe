@echo off
echo ========================================
echo   Publishing VYBE to Expo
echo ========================================
echo.
echo STEP 1: Login to Expo
echo If you don't have an account, create one at https://expo.dev
echo.
cd frontend
npx expo login
echo.
echo ========================================
echo STEP 2: Building for Expo Go
echo This will create a shareable link!
echo ========================================
echo.
npx eas update --branch production --message "VYBE Dashboard Initial Release"
echo.
echo Done! You'll get a QR code you can scan from anywhere!
pause
