import { ScrollView, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { styles } from './App.styles';
import { Header } from './components/Header/Header';
import { TaskList } from './components/TaskManager/TaskList';

const TASKS = [
  { id: '1', text: 'Buy groceries', completed: false },
  { id: '2', text: 'Walk the dog', completed: true },
  { id: '3', text: 'Read a book', completed: false },
  {id: '4', text: 'Exercise for 30 minutes', completed: true },
  {id: '5', text: 'Call a friend', completed: false },
  {id: '6', text: 'Finish the project report', completed: false },
];

export default function App() {
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
            
          </View>

          {/* taskSection */}
          <View style={styles.taskWrapper}>
            {/* <TaskList task={TASKS[0]} />
            <TaskList task={TASKS[1]} />
            <TaskList task={TASKS[2]} /> */}
            {/* <TaskList tasks={TASKS}/> */}
            <ScrollView>
              <TaskList tasks={TASKS}/>
            </ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
