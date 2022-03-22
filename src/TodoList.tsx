import { useState } from "react";

interface Todo {
    task: string,
    isCompleted: boolean,
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState(``);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (task === ``) {
            return;
        }
        setTodos([...todos, {task, isCompleted: false}]);
        setTask(``);
    }
    
    const handleDelete = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <h1>ToDo List</h1>
            <form onSubmit={handleSubmit}> 
                Add Task：
                <input placeholder="Add New Task" onChange={handleInput} value={task}/>
            </form>
            <ul>
                {todos.map((todo: Todo, index: number) => {
                    return (
                        <li key={index}>
                            {todo.task}
                            <span onClick={() => handleDelete(index)}>　X</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

//https://reffect.co.jp/react/reack-usestate-to-do-application
export default TodoList;