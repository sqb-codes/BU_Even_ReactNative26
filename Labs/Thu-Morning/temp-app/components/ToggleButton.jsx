import { Text, TouchableOpacity } from "react-native"
import { styles } from "./ToggleButton.style"

export const ToggleButton = ({unit, onPress}) => {
    return (
        <TouchableOpacity style={styles.toggleBtn} onPress={onPress}>
            <Text style={styles.unit}>Convert To {unit}</Text>
        </TouchableOpacity>
    )
}