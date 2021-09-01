type Todo = {
    text: string;
    complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => boolean;

type AddTodo = (newTodo: string) => void;

type DeleteTodo = (checkedTodo: Todo) => void;