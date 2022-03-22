import { useState } from "react";

const TodoList = () => {
    const initialState = [
        {
            task: 'Learn vue.js',
            isCompleted: false
        },
        {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        },     
    ]

    const [todos, setTodo] = useState(initialState);
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(task === ''){
            return;
        }
        setTodo([...todos, {task, isCompleted: false}]);
        setTask(``);
    }

    const handleRemoveTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodo(newTodos);
    }

    const handleUpdateTask = (index) => {
        let newTodos = todos.map((todo, todoIndex) => {
            if(todoIndex === index){
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })
        setTodo(newTodos);
    }

    return (
        <>
            <h1>ToDo List</h1>
            <form onSubmit={handleSubmit}>
                Add Task：<input placeholder="Add New Task" onChange={handleChange} value={task}/>
            </form>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}
                            style={todo.isCompleted === true ? {textDecorationLine:`line-through`} : {}}>
                                {todo.task} 
                            <span onClick={() => handleUpdateTask(index)}> X</span>
                        </li>
                    );
                })}
            </ul>

        </>
    )
}

//https://reffect.co.jp/react/reack-usestate-to-do-application
export default TodoList;
