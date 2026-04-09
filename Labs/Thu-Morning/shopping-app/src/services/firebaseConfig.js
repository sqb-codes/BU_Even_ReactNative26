import {initializeApp} from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
