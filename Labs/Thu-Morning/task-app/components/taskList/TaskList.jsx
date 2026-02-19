import { FlatList, Text, View } from "react-native"
import { TaskCard } from "../taskCard/TaskCard"
import { styles } from "./TaskList.styles"

export const TaskList = ({taskList}) => {
    return (
        <FlatList
            style={styles.taskList}
            data={taskList}
            renderItem={(task) => {
                return (
                    <TaskCard task={task}/>
                )
            }}
        >

        </FlatList>
    )
}