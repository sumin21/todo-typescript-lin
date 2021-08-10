import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
//interface Props extends RouteComponentProps {}
const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  //toggletodo 함수
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    //기존의 todos -> newtodos로 동적 변환
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/intro">소개</Link>
        </li>
      </ul>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
