import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/header/Header";
import { TaskForm } from "./components/taskForm/TaskForm";
import { useState } from "react";
import { TaskList } from "./components/taskList/TaskList";

// npm install react-native-safe-area-context
export default function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  }

  return (
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <Header/>
          </View>
          <View>
            <TaskForm onAdd={addTask}/>
          </View>
          <View>
            <TaskList taskList={taskList}/>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}
