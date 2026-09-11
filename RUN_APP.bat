@echo off
echo ================================
echo   Starting VYBE App
echo ================================
echo.
echo This will start the app in TUNNEL mode
echo which works best and avoids network issues!
echo.
cd frontend
npx expo start --tunnel --clear
