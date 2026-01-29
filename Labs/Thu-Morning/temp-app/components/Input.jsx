import { TextInput, View } from "react-native";
import { styles } from "./Input.style";

export const Input = ({defaultValue, onChange}) => {
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                placeholder="Enter temperature"
                maxLength={4}
                style={styles.inputBox}
                defaultValue={defaultValue}
                onChangeText={onChange}
            />
        </View>
    )
}