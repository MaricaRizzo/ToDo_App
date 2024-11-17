import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <>
      <div>
        <p>TaskList</p>

        {props.myList.forEach((i) => {
          <TaskItem toDoItem={i} />;
        })}
      </div>
    </>
  );
}

export default TaskList;
