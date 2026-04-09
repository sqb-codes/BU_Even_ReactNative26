import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { useEffect, useState } from "react";
import MainTabNav from "./MainTabnavigator";
import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(false);
        }, 3000);
    }, []);

    return (

        <NavigationContainer>
            {isLoggedIn ? <MainTabNav/> : <AuthNavigator/>}
        </NavigationContainer>

        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Login">
        //         <Stack.Screen name="Login" component={LoginScreen}/>
        //         <Stack.Screen name="Home" component={HomeScreen}/>
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}