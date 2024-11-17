import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <>
      <div>
        <p>TaskList</p>

        {props.myList.map((i, index) => (
          <TaskItem key={index} toDoItem={i} />
        ))}
      </div>
    </>
  );
}

export default TaskList;
