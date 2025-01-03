import { Todo } from "../Todo";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
  return (
    <li className="w-full px-2 py-1 bg-gray-400 flex justify-center items-center gap-2 rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-[18px] h-[18px]"
      />
      <span
        className={`
          ${
            todo.completed ? "line-through text: text-red-500" : "text-gray-800"
          } text-lg font-semibold w-full`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;
