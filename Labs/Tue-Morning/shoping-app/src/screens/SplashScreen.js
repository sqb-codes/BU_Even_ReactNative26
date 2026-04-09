import { useEffect } from "react"
import { Text, View } from "react-native";

export const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Login");
        }, 2000);
    }, []);

    return (
        <View>
            <Text>Loading Shopping...</Text>
        </View>
    )
}