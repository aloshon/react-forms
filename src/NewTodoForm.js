import React, {useState} from "react";

const NewTodoForm = ({addTask}) => {
    const initialState = {
        task: '',
        id: 0
    }
    const [formData, setFormData] = useState(initialState);
    const [isInvalid, setIsInvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);

    const handleChange = (e) => {
        setIsTouched(true)
        const {name, value} = e.target;
        if(value === ''){
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isInvalid){
            addTask({...formData});
            setFormData(initialState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input 
            id="task"
            type="text"
            name="task" 
            placeholder="task" 
            value={formData.task} 
            onChange={handleChange}/>
            {isInvalid && isTouched && <span style={{color: 'red'}}>Cannot be blank!</span>}
            <button>Add Todo!</button>
        </form>
    )
}

export default NewTodoForm;