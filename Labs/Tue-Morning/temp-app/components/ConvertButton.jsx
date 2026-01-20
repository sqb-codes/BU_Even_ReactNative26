import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ConvertButton.style";

export function ConvertButton({unit, onPress}) {
    return (
        <TouchableOpacity 
            style={styles.btn} 
            onPress={onPress}>
        <Text style={styles.btnText}>Convert to {unit}</Text>
        </TouchableOpacity>
    )
}