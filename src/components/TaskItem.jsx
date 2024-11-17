import { useState } from "react";

function TaskItem(props) {
  const currentList = props.myList;
  const [isCompleted, setIsCompleted] = useState(false);

  function removeTask(event) {
    event.preventDefault();
    const updatedList = currentList.filter(
      (item, index) => index !== props.index
    );
    props.setMyList(updatedList);
  }

  return (
    <div className="d-flex justify-content-between w-75 mx-auto mb-2 row">
      <p
        className={`text-start col-10 ${
          isCompleted ? "text-decoration-line-through" : ""
        }`}
      >
        {props.toDoItem}
      </p>
      <div className="col-2 d-flex no-wrap">
        <button
          className={`btn me-2 ${
            isCompleted ? "btn-success" : "btn-secondary"
          } `}
          onClick={() => setIsCompleted(!isCompleted)}
        >
          <i className="fas fa-check"></i>
        </button>
        <button className="btn btn-danger" onClick={removeTask}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
