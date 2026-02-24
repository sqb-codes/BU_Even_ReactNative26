import { ScrollView, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { styles } from './App.styles';
import { Header } from './components/Header/Header';
import { TaskList } from './components/TaskManager/TaskList';
import { useState } from 'react';
import { TaskInput } from './components/TaskManager/TaskForm';

// const TASKS = [
//   { id: '1', text: 'Buy groceries', completed: false },
//   { id: '2', text: 'Walk the dog', completed: true },
//   { id: '3', text: 'Read a book', completed: false },
//   {id: '4', text: 'Exercise for 30 minutes', completed: true },
//   {id: '5', text: 'Call a friend', completed: false },
//   {id: '6', text: 'Finish the project report', completed: false },
// ];

export default function App() {
  
  const [taskList, setTaskList] = useState([]);
  const addTask = (task) => {
    setTaskList([...taskList, task]);
    console.log("Task Added :",taskList);
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.taskId !== id));
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {/* header */}
          <View style={styles.headerWrapper}>
            <Header />
          </View>

          {/* taskInput */}
          <View style={styles.taskInputWrapper}>
            <TaskInput 
              addTask = {addTask}
            />
          </View>

          {/* taskSection */}
          <View style={styles.taskWrapper}>
            {/* <TaskList task={TASKS[0]} />
            <TaskList task={TASKS[1]} />
            <TaskList task={TASKS[2]} /> */}
            {/* <TaskList tasks={TASKS}/> */}
            <ScrollView>
              <TaskList 
                tasks={taskList}
                onDelete={deleteTask}
                />
            </ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
