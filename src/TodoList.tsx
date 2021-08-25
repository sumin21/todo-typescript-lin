import React from "react";
import { TodoListItem } from "./TodoListItem";
import { AddTodoForm } from "./AddTodoForm";
import "./TodoList.css";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  number: number;
}

let mtodos: Array<Todo>;
let mtodos2: Array<Todo>;

export function checkBoxClick(Todo: Todo, number: number) {
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
  if (number == 1) return mtodos;
  else return mtodos2;
}

export function listDelete(Todo: Todo, number: number) {
  //삭제
  let todoIndex: number;
  if (number == 1) {
    todoIndex = mtodos.indexOf(Todo);
    mtodos.splice(todoIndex, 1);
    return mtodos;
  } else {
    todoIndex = mtodos2.indexOf(Todo);
    mtodos2.splice(todoIndex, 1);
    return mtodos2;
  }
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  number,
}) => {
  if (number == 1) {
    mtodos = todos;
  } else if (number == 2) {
    mtodos2 = todos;
  }
  console.log("mtodos", mtodos, mtodos2);
  console.log("todos", todos);

  return (
    <ul className="p-0 ms-3">
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            number={number}
          />
        );
      })}
    </ul>
  );
};
