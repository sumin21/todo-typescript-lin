import React, { useState } from "react";
import { Link, Switch, Redirect, Route } from "react-router-dom";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { TodoLists } from "./TodoLists";

import Login from "./Login";
import "./App.css";

function App() {
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
                <TodoLists title={"Todo"} />
                <TodoLists title={"Intern"} />
                <TodoLists title={"+"} />
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
