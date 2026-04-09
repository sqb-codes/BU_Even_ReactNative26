import {initializeApp} from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
    apiKey: "AIzaSyASEcBdX2kgjqY-EJ2rlYL0rbpmywwGixQ",
    authDomain: "shopping-app-tue.firebaseapp.com",
    projectId: "shopping-app-tue",
    storageBucket: "shopping-app-tue.firebasestorage.app",
    messagingSenderId: "470144455965",
    appId: "1:470144455965:web:e68863b588f8da70c07df4",
    measurementId: "G-DMXN5TM0Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});