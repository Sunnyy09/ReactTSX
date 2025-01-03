import { useState } from "react";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

function AddTodo({ addTodo }: TodoInputProps) {
  const [textValue, setTextValue] = useState<string>("");

  const handleAddTodo = () => {
    if (textValue.trim()) {
      addTodo(textValue.trim());
      setTextValue("");
    }
  };

  return (
    <div className="bg-gray-200 w-full h-24 rounded">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
        className="flex w-full h-full px-8 justify-center items-center"
      >
        <input
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          type="text"
          className="w-full bg-[#121212] text-white px-1 py-2 outline-none rounded-l"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white text-lg font-bold px-3 py-1.5 rounded-r hover:bg-indigo-600"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
