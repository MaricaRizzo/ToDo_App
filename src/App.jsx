import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function App() {
  return (
    <>
      <div>
        <p>Hello World!</p>
        <TaskStats />
        <TaskInput />
        <TaskList />
      </div>
    </>
  );
}

export default App;
