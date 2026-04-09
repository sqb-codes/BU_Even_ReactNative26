import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/LoginScreen";
import { SplashScreen } from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator;