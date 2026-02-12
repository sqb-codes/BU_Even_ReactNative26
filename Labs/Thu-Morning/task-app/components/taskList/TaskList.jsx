import { FlatList, Text, View } from "react-native"

export const TaskList = ({taskList}) => {
    return (
        <FlatList
            data={taskList}
            renderItem={(task) => {
                return (
                    <View>
                        <Text>
                            New Task: {task.item}
                        </Text>
                    </View>
                )
            }}
        >

        </FlatList>
    )
}