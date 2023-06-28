import { useState } from "react";
import NewTask from "./components/newTask";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState(['bali','babu']);
  function addItem(item) {
    setTasks(prevTasks => [...prevTasks, item])
  }
  function deleteTask(index){
    setTasks(prevTasks=>{
      return prevTasks.filter((task,_index)=>{
        return index!=_index;
      })
    })
  }
  return (
    <div>
      <div id="goal-form">
        <h3>Create Task</h3>
        <NewTask addItem={addItem} />
      </div>
      <div>
        <Tasks tasks={tasks} delete={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
