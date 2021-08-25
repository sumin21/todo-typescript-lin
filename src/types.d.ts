type Todo = {
    text: string;
    complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo, mtodos:Array<Todo>) => boolean;

type AddTodo = (newTodo: string) => void;