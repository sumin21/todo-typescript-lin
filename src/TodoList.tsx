import React from "react";
import { TodoListItem } from "./TodoListItem";
import { AddTodoForm } from "./AddTodoForm";
import "./TodoList.css";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

// let mtodos: Array<Todo>;

// export function checkBoxClick(Todo: Todo) {
//   //완료
//   if (!Todo.complete) {
//     console.log(mtodos.indexOf(Todo));
//     // let todoIndex: number = mtodos.indexOf(Todo);
//     // mtodos.splice(todoIndex, 1);
//     // mtodos.push(Todo);
//   } else {
//     // let todoIndex: number = mtodos.indexOf(Todo);
//     // mtodos.splice(todoIndex, 1);
//     // mtodos.unshift(Todo);
//   }
//   return mtodos;
// }

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  console.log("todos", todos);

  return (
    <ul className="todo-list p-0 ms-3 overflow-auto">
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
