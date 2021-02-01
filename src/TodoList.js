import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import {v4 as uuid} from "uuid";

const TodoList = () => {
    const intitialState = []
    const [tasks, setTasks] = useState(intitialState);

    const addTask = (newTask) => {
        setTasks(tasks => [...tasks, {...newTask, id: uuid()}])
    }

    const remove = (task) => {
        setTasks(tasks.filter(t => t.id !== task))
    }

    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm addTask={addTask}/>
            <ul className="todolist">
                {tasks.map(({id, task}) => <Todo key={id} id={id} task={task} remove={remove}/>)}
            </ul>
        </div>
    )
}

export default TodoList;