import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./TaskForm.styles"
import { useState } from "react"

export const TaskForm = ({onAdd}) => {
    const [taskTitle, setTaskTitle] = useState("");

    const taskTitleHandler = (enteredTask) => {
        setTaskTitle(enteredTask)
    }

    const addTaskHandler = () => {
        onAdd(taskTitle);
    }

    return (
        <View>
            <TextInput
                placeholder="Enter your task"
                style={styles.textInput}
                onChangeText={taskTitleHandler}
            />
            <TouchableOpacity 
            onPress={addTaskHandler}
            style={styles.addTaskBtn}>
                <Text style={styles.btnText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}