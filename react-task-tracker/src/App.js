import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


function App() {
  // const name = 'Jorge'
  // const x = false
  const [tasks,setTasks] = useState(
      [
        {
        id:1,
        text:'Study',
        day: 'Every day',
        reminder: true
    },
    {
        id:2,
        text:'Study',
        day: 'Every day',
        reminder: true
    },
    {
        id:3,
        text:'Study',
        day: 'Every day',
        reminder: false
    }])

    //Delete Task
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !== id))
    }
  return (
    
    <div className="container">
      <Header />
{ tasks.length >0 ? (  
    <Tasks tasks={tasks} onDelete= {deleteTask}   />
    ): (
      'No tasks to show'
    )

}    </div>
  );
}

export default App;
