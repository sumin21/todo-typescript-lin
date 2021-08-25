import React, { useState } from "react";
import { Link, Switch, Redirect, Route } from "react-router-dom";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import Login from "./Login";
import "./App.css";
//interface Props extends RouteComponentProps {}
const initialTodos: Array<Todo> = [
  { text: "밥먹기", complete: false },
  { text: "잠자기", complete: false },
];
const initialTodos2: Array<Todo> = [{ text: "일어나기", complete: false }];
const initialTodos3: Array<Todo> = [{ text: "놀기", complete: false }];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  // const [todos2, setTodos2] = useState(initialTodos2);
  // const [todos3, setTodos3] = useState(initialTodos3);

  //toggletodo 함수
  const toggleTodo: ToggleTodo = (selectedTodo, mtodos) => {
    const newTodos = mtodos.map((todo) => {
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
    if (selectedTodo.complete) {
      return false;
    } else {
      return true;
    }
  };

  const addTodo: AddTodo = (newTodo) => {
    let todosLen: Number = todos.length;
    let texts: Array<String> = [];
    for (let i = 0; i < todosLen; i++) {
      texts.push(todos[i].text);
    }

    newTodo.trim() !== "" &&
      texts.indexOf(newTodo) === -1 &&
      setTodos([...todos, { text: newTodo, complete: false }]);

    if (texts.indexOf(newTodo) !== -1) {
      alert("이미 존재하는 리스트입니다.");
    }
  };

  return (
    <React.Fragment>
      <div className="todo-container">
        <Switch>
          <Route path="/intro">
            <div className="todo-elements-container">
              <div className="todo-elements-title bg-light">
                <span className="todo-elements-title-text">todo list</span>
              </div>
              <div className="todo-elements-box row">
                <div className="col-lg-3 mb-3">
                  <div className="todo-elements bg-white shadow p-3 mb-5">
                    <div className="todo-element">
                      <div className="todo-element-title">
                        <span>Todo</span>
                      </div>
                      <TodoList todos={todos} toggleTodo={toggleTodo} />
                      <AddTodoForm addTodo={addTodo} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="todo-elements bg-white shadow p-3 mb-5">
                    <div className="todo-element">
                      <div className="todo-element-title">
                        <span>Intern</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="todo-elements bg-white shadow p-3 mb-5">
                    <div className="todo-element">
                      <div className="todo-element-title">
                        <span>Daily</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="todo-elements bg-white shadow p-3 mb-5">
                    <div className="todo-element">
                      <div className="todo-element-title">
                        <span>+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
