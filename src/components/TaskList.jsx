import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <div className="mt-4">
      {props.myList.map((i, index) => (
        <TaskItem key={index} toDoItem={i} />
      ))}
    </div>
  );
}

export default TaskList;
