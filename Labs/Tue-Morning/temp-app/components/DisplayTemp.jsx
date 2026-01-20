import { Text, View } from "react-native";

export function DisplayTemp({temperature, unit}) {
    return (
        <View>
            <Text>
                {temperature} {unit}
            </Text>
        </View>
    )
}