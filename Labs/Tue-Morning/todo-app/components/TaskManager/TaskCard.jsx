import { Text, TouchableOpacity } from "react-native"
import { styles } from "./TaskList.style";

export const TaskCard = ({ task }) => {
    return (
        <>
            <TouchableOpacity style={styles.card}>
                <Text 
                    style={[styles.taskTitle,
                        task.completed && 
                        {textDecorationLine: "line-through"}
                    ]}
                >
                    {task.text}
                </Text>
            </TouchableOpacity>
        </>
    )
}