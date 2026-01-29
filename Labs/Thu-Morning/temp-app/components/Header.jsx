import { Text, View } from "react-native";
import { styles } from "./Header.style";

export const Header = () => {
    return (
        <>
            <View>
                <Text style={styles.title}>Weather app</Text>
            </View>
        </>
    )
}