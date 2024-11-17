function TaskItem(props) {
  return (
    <div className="d-flex justify-content-between w-75 mx-auto mb-2 row">
      <p className="text-start col-10">{props.toDoItem}</p>
      <div className="col-2 d-flex no-wrap">
        <button className="btn btn-success me-2">
          <i className="fas fa-check"></i>
        </button>
        <button className="btn btn-danger">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
