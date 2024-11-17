import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function App() {
  const [myList, setMyList] = useState([]);

  return (
    <div className="container-fluid text-center">
      <div className="card mt-5 mx-auto w-50">
        <div className="card-header">
          <h1>To-Dos</h1>
        </div>
        <div className="card-body">
          <TaskStats myList={myList} />
          <TaskInput myList={myList} setMyList={setMyList} />
          <TaskList myList={myList} setMyList={setMyList} />
        </div>
      </div>
    </div>
  );
}

export default App;
