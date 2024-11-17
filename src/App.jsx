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
        <p>Hello World!</p>
        <TaskStats myList={myList} />
        <TaskInput setMyList={setMyList} />
        <TaskList myList={myList} />
      </div>
    </div>
  );
}

export default App;
