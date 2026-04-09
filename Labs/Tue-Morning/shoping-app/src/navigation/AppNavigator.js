import {NavigationContainer} from "@react-navigation/native";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import { LoginScreen } from "../screens/LoginScreen";
// import { HomeScreen } from "../screens/HomeScreen";
import { useEffect, useState } from "react";
import { MainTabNavigator } from "./MainTabNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

// const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoggedIn(true);
    //     }, 3000);
    // }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(user);
        })
        return unsubscribe;
    }, []);

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainTabNavigator/> : <AuthNavigator/>}
        </NavigationContainer>

        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Login">
        //         <Stack.Screen name="Login" component={LoginScreen}/>
        //         <Stack.Screen name="Home" component={HomeScreen}/>
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}