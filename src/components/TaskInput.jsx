import { useState, useRef, useEffect } from "react";

function TaskInput(props) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      props.setMyList((myList) => [...myList, inputValue]);
      setInputValue("");
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleAddTask}>
        <label>New task</label>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default TaskInput;
