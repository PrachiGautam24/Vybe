# 🚀 How to Run VYBE App - SIMPLE GUIDE

## ⚠️ IMPORTANT: Ignore Web Version!

**The web version is NOT needed and is causing errors. Focus on your phone!**

---

## 📱 Method 1: Double-Click to Run (EASIEST!)

1. **Double-click** `RUN_APP.bat` file
2. Wait for QR code to appear
3. Open **Expo Go** app on your phone
4. Scan the QR code
5. Wait for app to load
6. Done! 🎉

---

## 📱 Method 2: Command Line (RECOMMENDED)

Open Command Prompt or PowerShell:

```bash
cd frontend
npx expo start --tunnel
```

**Why tunnel?** It works on ANY network and fixes the "IOException" error!

---

## ❌ What About the Web Error?

**IGNORE IT!** The web error doesn't matter because:
- Your app is designed for **mobile phones**
- Web is optional and not needed
- Mobile version works perfectly fine

---

## 📲 Steps to Run on Your Phone:

### Step 1: Install Expo Go
- **Android**: [Play Store - Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS**: [App Store - Expo Go](https://apps.apple.com/app/expo-go/id982107779)

### Step 2: Start the App
```bash
cd frontend
npx expo start --tunnel
```

### Step 3: Scan QR Code
- **Android**: Open Expo Go → Tap "Scan QR Code"
- **iOS**: Open Camera app → Point at QR code → Tap notification

### Step 4: Wait
- First load takes 30-60 seconds
- Be patient!
- You'll see VYBE dashboard when ready

---

## 🔧 If You Get "Failed to Download" Error

This is the IOException error. **Solution:**

1. Stop the app (Ctrl+C)
2. Run with tunnel mode:
```bash
npx expo start --tunnel --clear
```
3. Scan new QR code
4. It will work!

**Tunnel mode fixes 99% of network errors!**

---

## ✅ What You Should See:

When working, you'll see in terminal:
```
Metro waiting on exp://...
› Press a | open Android
› Press i | open iOS simulator  
› Press w | open web

› Press ? │ show all commands

(QR CODE HERE)
```

On your phone in Expo Go:
1. Black screen → Loading
2. VYBE logo appears
3. Dashboard with:
   - "Good morning, Divyansh"
   - 🔥 17 Day Streak
   - Progress circles (Steps, XP, Coffee)
   - Friends list
   - Community Run
   - Challenges

---

## 🚫 Don't Press These Keys:

- ❌ Don't press `w` (web) - it will show errors
- ✅ Press `a` for Android emulator (if you have one)
- ✅ Press `i` for iOS simulator (Mac only)
- ✅ Press `?` to see all commands

---

## 💡 Pro Tips:

1. **Always use `--tunnel` flag** when having issues
2. **Be patient** on first load (30-60 seconds)
3. **Shake your phone** in Expo Go to reload if needed
4. **Pull down** to refresh if app looks broken
5. **Ignore web errors** - focus on mobile!

---

## 🎯 Quick Commands Cheat Sheet:

```bash
# Normal start
npm start

# Having issues? Use tunnel!
npx expo start --tunnel

# Clear cache too
npx expo start --tunnel --clear

# Complete reset
npx expo start --tunnel --clear --reset-cache
```

---

## 🆘 Still Not Working?

Try this sequence:

1. Stop current process (Ctrl+C)
2. Close Expo Go app on phone
3. Run: `npx expo start --tunnel --clear`
4. Open Expo Go again
5. Scan new QR code
6. Wait patiently (60 seconds)

If still broken, restart your computer and try again.

---

## ✨ Expected Result:

**Terminal:**
- Shows QR code
- Says "Metro waiting..."
- No red errors (yellow warnings are OK)

**Phone:**
- Expo Go opens
- Shows "Downloading JavaScript bundle..."
- VYBE dashboard appears!

---

## 📝 Summary:

1. **Ignore web errors** - you don't need web!
2. **Use tunnel mode** - `npx expo start --tunnel`
3. **Be patient** - first load takes time
4. **Focus on mobile** - that's what matters!

---

## 🎉 Ready to Run?

```bash
cd frontend
npx expo start --tunnel
```

Then scan with Expo Go and enjoy your VYBE dashboard! 🚀💪

---

**Remember: The IOException error is fixed by using `--tunnel` mode!**
