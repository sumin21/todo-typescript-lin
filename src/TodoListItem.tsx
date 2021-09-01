import React, { useState } from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  const [deleteBtn, deleteBtnBlock] = useState(false);
  console.log("2", todo);
  const onDelete = async (available: boolean) => {
    try {
      //완료
      if (available) {
        console.log("ss");
        deleteBtnBlock(true);
      } else {
        deleteBtnBlock(false);
      }
    } catch (error) {
      //실패하면 throw new Error("") 값 출력
      window.alert(error);
    }
  };

  console.log("dd");
  return (
    <li className="d-flex justify-content-between align-items-center mb-2">
      <label
        className={
          todo.complete
            ? "complete-item ms-2 clickable"
            : "no-complete-item ms-2 clickable"
        }
      >
        <div className="check-box-container">
          <input
            className="item-check-box"
            type="checkbox"
            checked={todo.complete}
            onChange={() => {
              let available: boolean = toggleTodo(todo);
              onDelete(available);
            }}
          />
          <span className="mb-0 check-box"></span>
          <span className="item-text ms-4 disabled">{todo.text}</span>
        </div>
      </label>
      <div
        className="item-delete-btn-box me-4 ms-4"
        style={{ display: deleteBtn ? "block" : "none" }}
      >
        <button
          type="button"
          className="item-delete-btn btn btn-white"
          onClick={() => {
            deleteTodo(todo);
          }}
        />
      </div>
    </li>
  );
};
