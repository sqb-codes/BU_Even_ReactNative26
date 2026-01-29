import { Text, View } from "react-native"
import { styles } from "./DisplayTemp.style"

export const DisplayTemp = ({unit, temp}) => {
    return (
        <View>
            <Text style={styles.temp}>{temp} {unit}</Text>
        </View>
    )
}