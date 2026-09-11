# 🚀 Quick Start Guide

## Start Your React Native App Right Now!

### Step 1: Navigate to Frontend
```bash
cd frontend
```

### Step 2: Start the Development Server
```bash
npm start
```

### Step 3: Run on Your Preferred Platform

Once the Metro bundler starts, you'll see a QR code and options:

- **Press `a`** - Open on Android emulator
- **Press `i`** - Open on iOS simulator (macOS only)
- **Press `w`** - Open in web browser
- **Scan QR code** - Use Expo Go app on your phone

## 📱 Testing on Physical Device

1. **Install Expo Go App**
   - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Scan QR Code**
   - Android: Scan with Expo Go app
   - iOS: Scan with Camera app (opens in Expo Go)

## 🎯 What You'll See

When the app starts, you'll see:
1. **Login Screen** - Sign in to your account
2. **Register Screen** - Create a new account (tap "Sign Up")
3. **Home Screen** - Main app screen (after login)

**Note**: The authentication won't work yet because there's no backend. You'll see error messages when trying to login/register. This is expected!

## ⚡ Hot Reload

As you edit code:
- Save the file
- App automatically refreshes
- See changes instantly!

## 🛠️ Quick Edits to Try

### 1. Change the App Title
Edit `frontend/src/screens/HomeScreen.js`:
```javascript
<Text style={styles.title}>My Awesome App!</Text>
```

### 2. Change Primary Color
Edit `frontend/src/constants/colors.js`:
```javascript
primary: '#FF6B6B', // Change to any color you like
```

### 3. Add a New Button
In `frontend/src/screens/HomeScreen.js`, add:
```javascript
<TouchableOpacity 
  style={styles.button}
  onPress={() => Alert.alert('Hello!', 'You clicked the button!')}
>
  <Text style={styles.buttonText}>Click Me!</Text>
</TouchableOpacity>
```

## 📝 Next: Build the Backend

To make authentication work, you need to create the backend:

1. Create backend folder
2. Set up Express server
3. Connect MongoDB
4. Create auth endpoints

See `PROJECT_OVERVIEW.md` for detailed instructions!

## 🆘 Common Issues

### "Cannot connect to Metro bundler"
```bash
npm start -- --reset-cache
```

### "Module not found"
```bash
npm install
```

### App won't load on phone
- Make sure phone and computer are on same WiFi
- Check firewall settings
- Try running with `npm start --tunnel`

## 💡 Pro Tips

1. **Shake device** or press `Ctrl+M` (Android) / `Cmd+D` (iOS) for developer menu
2. Enable **Fast Refresh** for instant updates
3. Use **Debug Remote JS** for debugging in Chrome
4. **Reload** app with `R` key in terminal

---

Happy coding! 🎉
