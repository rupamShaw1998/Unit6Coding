import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/action';

export const Todo = () => {

    let dispatch = useDispatch();
    const [task, setTask] = useState("");
    const todos = useSelector((store) => store.todoState.todoState);
    
    console.log(todos);
    const addTasks = () => {
        dispatch(addTodo({
            id: Math.floor(1000*Math.random()),
            task: task
        }))
    }
    
    return (
        <div>
            <input
                type="text"
                placeholder="enter todo"
                onChange={(e) => setTask(e.target.value)} 
            />
            <button 
                onClick={addTasks}
            >
                +
            </button>
        </div>
    )
}