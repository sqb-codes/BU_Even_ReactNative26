import { Button, Pressable, Text, Touchable, View } from "react-native"
import { styles } from "./TaskCard.styles"

export const TaskCard = ({task}) => {
    return (
        <View style={styles.cardWrapper}>
            <Text style={styles.taskTitle}>
                {task.item}
            </Text>
            <Pressable 
                onPress={}
                style={styles.deleteBtn}>
                <Text style={styles.deleteTask}>Delete Task</Text>
            </Pressable>
        </View>
    )
}