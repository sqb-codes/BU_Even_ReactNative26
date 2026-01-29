import { TextInput, View } from "react-native";
import { styles } from "./Input.style";

export const Input = () => {
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                placeholder="Enter temperature"
                maxLength={4}
                style={styles.inputBox}
            />
        </View>
    )
}