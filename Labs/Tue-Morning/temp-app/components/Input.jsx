import { View, TextInput, Text } from "react-native";
import { styles } from "./Input.styles";

export function Input({defaultValue, unit, onChange}) {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.inputBox}
                maxLength={5}
                placeholder="Type temperature"
                defaultValue={defaultValue.toString()}
                onChangeText={(text) => {
                    onChange(text)
                }}
            />
            <Text style={styles.unit}>{unit}</Text>
        </View>
    )
}