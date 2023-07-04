import Box from "./todo-project/Box";
import AddTodos from "./todo-project/AddTodos";
import Pending from "./todo-project/Pending";
import "./todo-project/box.css";
import "./todo-project/queries.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Completed from "./todo-project/Completed";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [item, setItem] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(
    function () {
      async function fetchTodos() {
        const todos = await fetch("http://localhost:5000/todos");
        const res = await todos.json();
        setTodos([...res]);
      }
      fetchTodos();
    },
    [flag]
  );

  return (
    <>
      <div className="grid container">
        <Box>
          <h2 className="app-title">A new experience for your todos</h2>
          <AddTodos
            flag={flag}
            setFlag={setFlag}
            todos={todos}
            item={item}
            setItem={setItem}
            setTodos={setTodos}
          />
        </Box>
        <Box>
          <Pending
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          >
            {todos}
          </Pending>
        </Box>
        <Box>
          <Completed
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          >
            {completedTodos ? completedTodos : []}
          </Completed>
        </Box>
      </div>
    </>
  );
};

export default App;
