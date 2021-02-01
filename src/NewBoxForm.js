import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const initialState = {
        color: '',
        width: '',
        height: '',
        id: 0
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxcolor">Color</label>
            <input 
            id="boxcolor"
            type="text"
            name="color" 
            placeholder="color" 
            value={formData.color} 
            onChange={handleChange}/>
            <p>{formData.color}</p>
            <label htmlFor="boxheight">Height</label>
            <input 
            id="boxheight"
            type="number"
            name="height" 
            placeholder="px" 
            value={formData.height} 
            min={0}
            max={500}
            onChange={handleChange}/>
            <label htmlFor="boxwidth">Width</label>
            <input 
            id="boxwidth"
            type="number"
            name="width" 
            placeholder="px" 
            value={formData.width}
            min={0} 
            max={500}
            onChange={handleChange}/>
            <button>Add Box!</button>
        </form>
    )
}

export default NewBoxForm;