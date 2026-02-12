import { Text, View } from "react-native"
import { styles } from "./Header.styles"

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Task Manager App</Text>
        </View>
    )
}