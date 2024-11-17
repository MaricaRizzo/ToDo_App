import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <div className="mt-4">
      {props.myList.map((i, index) => (
        <TaskItem
          key={index}
          toDoItem={i}
          myList={props.myList}
          setMyList={props.setMyList}
          index={index}
        />
      ))}
    </div>
  );
}

export default TaskList;
