import React, { useState, useEffect, useRef } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

interface TodoListsProps {
  title: string;
}

const initialTodos: Array<Todo> = [];

export const TodoLists: React.FC<TodoListsProps> = ({ title }) => {
  const ref: any = useRef(null);
  const [text, setText] = useState(title);
  const [editable, setEditable] = useState(false);
  const [borderable, setBorderable] = useState(false);
  const [enterBorderable, setEnterBorderable] = useState(true);

  const mouseover = () => {
    console.log("ss");
    setBorderable(true);
  };

  const mouseout = () => {
    console.log("ss");
    setBorderable(false);
    setEnterBorderable(true);
  };

  const editOn = () => {
    setEditable(true);
  };
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setEditable(!editable);
      setBorderable(true);
      setEnterBorderable(false);
    }
  };
  const handleClickOutside = (e: any) => {
    if (editable == true && !ref.current.contains(e.target)) {
      setEditable(false);
      setBorderable(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
  });

  const [todos, setTodos] = useState(initialTodos);

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

  const deleteTodo: DeleteTodo = (Todo) => {
    //삭제
    let todoIndex: number;
    let todosLen: Number = todos.length;
    let newTodos: Array<Todo> = [];
    for (let i = 0; i < todosLen; i++) {
      newTodos.push(todos[i]);
    }

    todoIndex = newTodos.indexOf(Todo);
    newTodos.splice(todoIndex, 1);
    console.log("삭제", Todo, newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="col-lg-3 mb-3">
      <div className="todo-elements bg-white shadow p-3 mb-5">
        <div className="todo-element">
          <div className="todo-element-title pb-3 ms-3 mt-2 me-3 mb-2">
            {editable ? (
              <input
                className="title-input-text round p-1 ps-2 w-100"
                type="text"
                value={text}
                onChange={(e) => handleChange(e)}
                onKeyDown={handleKeyDown}
                ref={ref}
              />
            ) : (
              <div
                onClick={() => editOn()}
                onMouseOver={() => mouseover()}
                onMouseOut={() => mouseout()}
                ref={ref}
                className={
                  borderable && enterBorderable
                    ? "round p-1 ps-2 clickable"
                    : "p-1 ps-2 clickable"
                }
              >
                {text}
              </div>
            )}
          </div>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
          <AddTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};
