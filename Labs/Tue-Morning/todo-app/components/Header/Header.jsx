import { Image, Text, View } from "react-native";
import { styles } from "./Header.style";
import logo_1 from "../../assets/logo_1.png";

export const Header = () => {
    return (
        <View style={styles.wrapper}>
            <Image 
                style={styles.logo} 
                source={logo_1}
            />
            <Text style={styles.title}>
                Your Task App
            </Text>
        </View>
    )
}