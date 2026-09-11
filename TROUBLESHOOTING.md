# 🔧 Troubleshooting Guide - VYBE App

## Issue: "Failed to download remote update" or "Something went wrong"

This is a common SSL certificate issue with Expo. Here's how to fix it:

### Solution 1: Clear Metro Cache & Restart

```bash
cd frontend

# Clear cache
npx expo start --clear

# Or with npm
npm start -- --clear
```

### Solution 2: Use Tunnel Mode (Most Reliable)

```bash
cd frontend
npx expo start --tunnel
```

**Tunnel mode works best when:**
- You're behind a firewall
- On corporate/school network
- Phone and computer on different networks
- Having SSL certificate errors

### Solution 3: Reset Everything

```bash
cd frontend

# Stop any running processes first (Ctrl+C)

# Clear all caches
rmdir /s /q node_modules\.cache
rmdir /s /q .expo

# Restart
npm start -- --clear
```

### Solution 4: Check Network Connection

Make sure:
- [ ] Phone and computer are on **same WiFi network**
- [ ] Firewall is not blocking Expo
- [ ] Antivirus is not blocking ports
- [ ] Try disabling VPN if you're using one

### Solution 5: Use LAN Connection

```bash
cd frontend
npx expo start --lan
```

## Issue: Web Version Not Working

The web version might have compatibility issues. Try:

### Option 1: Install Web Dependencies

```bash
cd frontend
npx expo install react-dom react-native-web @expo/metro-runtime
```

### Option 2: Use Mobile Device Instead

Web is optional. Focus on mobile:
1. Install **Expo Go** app on your phone
2. Make sure phone and computer are on same WiFi
3. Scan QR code from terminal

## Issue: QR Code Won't Scan

### For Android:
1. Open **Expo Go** app
2. Tap "Scan QR Code"
3. Scan the QR from terminal

### For iOS:
1. Open native **Camera** app
2. Point at QR code
3. Tap notification to open in Expo Go

### Alternative: Manual Connection

1. Look for the URL in terminal (exp://192.168.x.x:8081)
2. In Expo Go, tap "Enter URL manually"
3. Type the URL and connect

## Issue: App Crashes on Launch

### Check Terminal for Errors

Look in the terminal where you ran `npm start`. Common errors:

**Error: "Cannot find module..."**
```bash
cd frontend
npm install
npm start
```

**Error: "Port 8081 already in use"**
```bash
# Kill the process using port 8081
npx kill-port 8081
npm start
```

### Clear Expo Go Cache

On your phone:
1. Open Expo Go
2. Shake device for dev menu
3. Tap "Reload"
4. If still broken, uninstall and reinstall Expo Go

## Issue: Icons/Emojis Not Showing

This is usually fine - they should show as emoji. If not:

```bash
cd frontend
npx expo install @expo/vector-icons
```

Then update components to use vector icons instead of emoji.

## Common Commands Reference

```bash
# Start with clear cache
npm start -- --clear

# Start with tunnel (most reliable)
npx expo start --tunnel

# Start with LAN
npx expo start --lan

# Reset everything
npx expo start --clear --reset-cache

# Check for issues
npx expo-doctor
```

## Still Having Issues?

### 1. Check Expo Status
Visit: https://status.expo.dev/

### 2. Verify Expo Go Version
- Need: **Expo Go 2.31.0+**
- Update from App/Play Store if needed

### 3. Check Node Version
```bash
node --version
```
Should be: **Node 18+ recommended**

### 4. Reinstall Dependencies
```bash
cd frontend
rmdir /s /q node_modules
del package-lock.json
npm install
npm start
```

### 5. Try Development Build (Advanced)
If Expo Go keeps failing, create a development build:
```bash
cd frontend
npx expo install expo-dev-client
npx expo run:android
# or
npx expo run:ios
```

## Testing Without Phone

### Use Android Emulator (Windows/Mac/Linux)
1. Install Android Studio
2. Create virtual device (AVD)
3. Run: `npm run android`

### Use iOS Simulator (Mac Only)
1. Install Xcode
2. Run: `npm run ios`

### Use Web Browser (Limited Support)
```bash
npm run web
```

## Network Troubleshooting

### Find Your IP Address

**Windows:**
```cmd
ipconfig
```
Look for "IPv4 Address" under your WiFi adapter

**Mac/Linux:**
```bash
ifconfig
# or
ip addr show
```

### Test Connection
Ping your computer from another device on same network:
```bash
ping YOUR_IP_ADDRESS
```

## Quick Fix Checklist

When app doesn't work, try in this order:

1. ✅ Restart Metro bundler (Ctrl+C, then `npm start`)
2. ✅ Clear cache (`npm start -- --clear`)
3. ✅ Use tunnel mode (`npx expo start --tunnel`)
4. ✅ Check same WiFi network
5. ✅ Reload in Expo Go (shake device → Reload)
6. ✅ Restart Expo Go app
7. ✅ Restart computer
8. ✅ Reinstall Expo Go on phone
9. ✅ Try different network
10. ✅ Use emulator instead of physical device

## Getting Help

If still stuck, provide this info:

- **Expo Go version**: (from app info)
- **Node version**: `node --version`
- **npm version**: `npm --version`
- **Operating System**: Windows/Mac/Linux
- **Phone OS**: Android/iOS version
- **Error message**: (full text from terminal)
- **What you tried**: List steps already attempted

---

## Most Common Solution 🎯

**90% of issues are fixed by:**

```bash
cd frontend
npx expo start --tunnel --clear
```

Then scan QR code again with Expo Go!

---

Good luck! Your VYBE app should be running smoothly now! 🚀
