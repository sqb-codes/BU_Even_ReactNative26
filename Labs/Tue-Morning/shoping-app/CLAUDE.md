# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Start Expo dev server (opens in Expo Go)
npm run android    # Run on Android emulator/device
npm run ios        # Run on iOS simulator/device
npm run web        # Run in browser
```

No test runner is configured yet.

## Architecture

**React Native + Expo** app (SDK ~54) with Firebase phone-number authentication.

### Navigation Flow

```
AppNavigator (auth state gating)
├── AuthNavigator  →  SplashScreen → LoginScreen
└── MainTabNavigator  →  Home | Cart | Orders | Profile
```

- `AppNavigator` listens to `onAuthStateChanged` and switches between `AuthNavigator` and `MainTabNavigator`.
- All navigation is in `src/navigation/`.

### Authentication

`LoginScreen` uses Firebase phone auth + `expo-firebase-recaptcha` for OTP. Firebase config lives in `src/services/firebaseConfig.js` with persistence via `@react-native-async-storage/async-storage`.

### State Management

Redux Toolkit (`@reduxjs/toolkit` + `react-redux`) is installed but `src/store/` is empty — not yet wired up. Currently the app uses local `useState` only.

### Directory Conventions

- `src/screens/` — one file per screen; most are placeholder stubs
- `src/navigation/` — navigation stacks/tabs only, no business logic
- `src/services/` — external service configs (Firebase)
- `src/components/`, `src/hooks/`, `src/store/`, `src/utils/`, `src/constants/` — scaffolded, currently empty

### Key Dependencies

| Package | Purpose |
|---|---|
| `@react-navigation/native-stack` | Auth stack |
| `@react-navigation/bottom-tabs` | Main tab bar |
| `firebase` v12 | Auth (phone + OTP) |
| `expo-firebase-recaptcha` | reCAPTCHA widget in LoginScreen |
| `axios` | HTTP client (installed, not yet used) |
| `react-native-dotenv` | Env vars (installed, not yet configured) |
