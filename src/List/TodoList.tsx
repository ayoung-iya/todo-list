import TodoItem from "../ListItem/TodoItem";
import { useTodoState } from "../Todo/TodoProvider";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const todoState = useTodoState()

  /**
   * const handleRemove = (id: number) => {
    todoDispatch({
      type: "remove",
      payload: {
        id: id,
      },
    });
  };

  const handleToggle = (id: number) =>
    todoDispatch({
      type: "checked",
      payload: {
        id: id,
      },
    });
   */
  return (
    <section>
      <ol className={styles.olContainer}>
        {todoState.todos.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            text={todo.text}
            isChecked={todo.isChecked}

          />
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
