import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks }) => {
    return (
        <>
            <TaskCard task={tasks[0]}/>
            <TaskCard task={tasks[1]}/>
            <TaskCard task={tasks[2]}/>
        </>
    )
}