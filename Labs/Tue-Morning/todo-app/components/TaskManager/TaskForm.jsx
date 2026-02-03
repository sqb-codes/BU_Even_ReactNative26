import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./TaskForm.style"
import { useState } from "react";

export const TaskInput = ({addTask}) => {

    // const [taskText, setTaskText] = useState("");
    const [taskObj, setTaskObj] = useState({
        taskId: 0,
        taskText: "",
        taskDescription: "",
        completed: false
    });

    // const addTaskHandler = (enteredTask) => {
        // setTaskText(enteredTask);
        // setTaskText({
        //     taskId: Math.random().toString(),
        //     taskText: enteredTask,
        //     completed: false
        // });

        // setTaskObj({...taskObj, 
        //     [taskText]: enteredTask, 
        //     taskId: Math.random().toString()});

    // }

    const handleTextChange = (key, value) => {
        setTaskObj({...taskObj, 
            [key]: value,
            taskId: Math.random().toString()
        });
        // setTaskObj({...taskObj, 
        //     [key]: value},
        // );
    }

    const submitHandler = () => {
        // addTask(taskText);
        addTask(taskObj);
        setTaskObj({
            taskId: 0,
            taskText: "",
            taskDescription: "",
            completed: false
        });
    }

    return (
        <>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your task"
                    // onChangeText={(text) => 
                    //     setTaskObj({...taskObj, taskText:text})
                    // }
                    value={taskObj.taskText}
                    onChangeText={(text) => handleTextChange("taskText", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter description"
                    // onChangeText={(text) => 
                    //     setTaskObj({...taskObj, taskDescription:text})
                    // }
                    value={taskObj.taskDescription}
                    onChangeText={(text) => handleTextChange("taskDescription", text)}
                />
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={submitHandler}>
                    <Text style={styles.btnText}>Add Task</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}