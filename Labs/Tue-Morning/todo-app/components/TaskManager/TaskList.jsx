import { View } from "react-native";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks }) => {
    return (
        <View>
            {/* <TaskCard task={tasks[0]}/>
            <TaskCard task={tasks[1]}/>
            <TaskCard task={tasks[2]}/> */}
            {
                tasks.map((task) => (
                    <TaskCard key={task.taskId} task={task}/>
                ))
            }
        </View>
    )
}