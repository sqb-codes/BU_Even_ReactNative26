import { Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./TaskList.style";

export const TaskCard = ({ task, onDelete }) => {
    return (
        <>
            <View style={styles.card}>
                <TouchableOpacity>
                    <Text 
                        style={[styles.taskTitle,
                            task.completed && 
                            {textDecorationLine: "line-through"}
                        ]}
                    >
                        {task.taskText}
                    </Text>

                    <Text 
                        style={styles.taskDesc}>
                        {task.taskDescription}
                    </Text>
                </TouchableOpacity>
                <Pressable onPress={() => onDelete(task.taskId)}>
                    <Text style={styles.deleteText}>Delete</Text>
                </Pressable>
            </View>
        </>
    )
}