import React, { useState } from "react";
import "./TodoListItem.css";
import { checkBoxClick, listDelete } from "./TodoList";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  const [mloginErr, setLoginErr] = useState(false);

  const onDelete = async (available: boolean) => {
    try {
      //완료
      if (available) {
        console.log("ss");
        setLoginErr(true);
      } else {
        setLoginErr(false);
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
          todo.complete ? "complete-item ms-2" : "no-complete-item ms-2"
        }
      >
        <div className="check-box-container">
          <input
            className="item-check-box"
            type="checkbox"
            checked={todo.complete}
            onChange={() => {
              let mtodos = checkBoxClick(todo);
              let available: boolean = toggleTodo(todo, mtodos);
              onDelete(available);
            }}
          />
          <span className="mb-0 check-box"></span>
          <span className="item-text ms-4 disabled">{todo.text}</span>
        </div>
      </label>
      <div
        className="item-delete-btn-box me-4 ms-4"
        style={{ display: mloginErr ? "block" : "none" }}
      >
        <button
          type="button"
          className="item-delete-btn btn btn-white"
          onClick={() => {
            let mtodos = listDelete(todo);
            toggleTodo(todo, mtodos);
          }}
        />
      </div>
    </li>
  );
};
