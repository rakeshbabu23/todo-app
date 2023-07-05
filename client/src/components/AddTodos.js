import { useState } from "react";
import axios from "axios";
import "./addTodos.css";
import "./queries.css";

const arr = [
  "#c92a2a",
  "#a61e4d",
  "#862e9c",
  "#5f3dc4",
  "#364fc7",
  "#1864ab",
  "#0b7285",
  "#e8590c",
];
export default function AddTodos({ item, setItem, setFlag }) {
  let color = arr[Math.floor(Math.random() * 8)];
  const [isEmpty, setIsEmpty] = useState(false);
  function handleClick(currTodo) {
    if (currTodo) {
      setIsEmpty(false);
      axios
        .post("http://localhost:5000/todos", { item: currTodo, color: color })
        .then((res) => {
          console.log(res);
          setFlag((flag) => !flag);
        });
      setItem("");
    } else {
      setIsEmpty(true);
    }
  }

  return (
    <div className="bg">
      <input
        type="text"
        value={item}
        placeHolder="your todo goes here..."
        required
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></input>
      <button className="add-btn" onClick={() => handleClick(item)}>
        Add
      </button>
      {isEmpty ? <h2 className="warning">Please add a todo</h2> : ""}
    </div>
  );
}
