import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string): void => {
    if (text) {
      const newTodo = { id: Date.now(), text: text, completed: false };
      setTodos([...todos, newTodo]);
      console.log(newTodo);
    }
  };

  const toggleTodo = (id: number): void => {
    if (id) {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        )
      );
    }
  };

  const deleteTodo = (id: number): void => {
    if (id) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="bg-[#121212] w-full min-h-screen">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl my-6 pt-8 text-gray-200 font-bold uppercase">
          Todo App
        </h1>
        <div className="space-y-6 lg:w-[450px] md:w-[400px] sm:[33vw]">
          <div>
            <AddTodo addTodo={addTodo} />
          </div>
          <div>
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
