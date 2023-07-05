import "./pending.css";
import "./queries.css";

export default function Pending({
  children,
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) {
  function handleComplete(child) {
    setCompletedTodos([child, ...completedTodos]);
    setTodos(todos.filter((todo) => todo.item !== child));
  }

  return (
    <div style={{ overflow: "auto" }}>
      <h3 className="title">Pending Tasks</h3>
      {children.map((child) => {
        return (
          <div
            className="todo"
            style={{
              backgroundColor: child.color,
            }}
            key={child.item}
          >
            <span className="pending-todo">{child.item}</span>
            <button
              className="completed-btn"
              onClick={() => handleComplete(child.item)}
            >
              <ion-icon
                class="icon-tick"
                name="checkmark-circle-outline"
              ></ion-icon>
            </button>
          </div>
        );
      })}
    </div>
  );
}
