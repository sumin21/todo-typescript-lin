import React from "react";
import { TodoListItem } from "./TodoListItem";
import { AddTodoForm } from "./AddTodoForm";
import "./TodoList.css";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

let mtodos: Array<Todo>;

export function checkBoxClick(Todo: Todo) {
  //완료
  if (!Todo.complete) {
    console.log(mtodos.indexOf(Todo));
    // let todoIndex: number = mtodos.indexOf(Todo);
    // mtodos.splice(todoIndex, 1);
    // mtodos.push(Todo);
  } else {
    // let todoIndex: number = mtodos.indexOf(Todo);
    // mtodos.splice(todoIndex, 1);
    // mtodos.unshift(Todo);
  }
  return mtodos;
}

export function listDelete(Todo: Todo) {
  //삭제
  let todoIndex: number = mtodos.indexOf(Todo);
  mtodos.splice(todoIndex, 1);
  return mtodos;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  mtodos = todos;
  console.log("mtodos", mtodos);

  return (
    <ul className="p-0 ms-3">
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};
