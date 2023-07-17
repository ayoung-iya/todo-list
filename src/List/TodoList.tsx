// import { TodoType } from "../App";
import { TodoType } from "../Todo/TodoReducer";
import TodoItem from "../ListItem/TodoItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoType[];
  onToggleClick: (id:number) => void
  onRemoveClick: (id:number) => void
}

const TodoList = (props: TodoListProps) => {
  return (
    <section>
      <ol className={styles.olContainer}>
        {props.todos.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            text={todo.text}
            isChecked={todo.isChecked}
            onRemoveClick={props.onRemoveClick}
            onToggleClick={props.onToggleClick}
          />
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
