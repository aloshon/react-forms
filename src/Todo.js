import React from "react";

const Todo = ({id, task, remove}) => {
    return (
        <li className="todo">
            {task}
            <button onClick={() => remove(id)}>X</button>
        </li>
    )
}

export default Todo;