import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function App() {
  const testArray = ["Buy milk", "Finish project"];
  const [myList, setMyList] = useState(testArray);

  return (
    <div className="container-fluid text-center">
      <div>
        <h1>To-Dos</h1>
        <TaskStats myList={myList} />
        <TaskInput myList={myList} setMyList={setMyList} />
        <TaskList myList={myList} />
      </div>
    </div>
  );
}

export default App;
