import { Text, View } from "react-native";
import { styles } from "./DisplayTemp.styles";

export function DisplayTemp({temperature, unit}) {
    return (
        <View>
            <Text style={styles.tempDisp}>
                {temperature} {unit}
            </Text>
        </View>
    )
}