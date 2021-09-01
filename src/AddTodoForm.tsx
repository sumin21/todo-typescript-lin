import React, { useState, ChangeEvent, FormEvent } from "react";
import "./AddTodoFrom.css";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <div className="input-group mb-3 pt-2 border-top">
        <input
          type="text"
          value={newTodo}
          className="form-control"
          placeholder="Recipient's username"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="list-add-btn btn btn-outline-secondary"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};
