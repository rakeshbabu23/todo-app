import axios from "axios";
import "./completed.css";
import "./queries.css";

export default function Completed({
  children,
  completedTodos,
  setCompletedTodos,
}) {
  function handleDelete(completedTodo) {
    setCompletedTodos(completedTodos.filter((todo) => todo !== completedTodo));
    axios
      .delete(`https://app-for-todos.onrender.com/todos/${completedTodo}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div style={{ overflow: "auto" }}>
        <h3 className="title">Completed Tasks</h3>
        {children.map((todo) => {
          return (
            <div className="completed-todo-box" key={todo}>
              <span className="completed-todo">{todo}</span>
              <button
                onClick={() => handleDelete(todo)}
                className="completed-btn"
              >
                <ion-icon
                  class="icon-close"
                  name="close-circle-outline"
                ></ion-icon>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
