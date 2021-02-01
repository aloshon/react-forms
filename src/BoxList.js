import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from "uuid";
import './BoxList.css';

const BoxList = () => {
    const intitialState = []
    const [boxes, setBoxes] = useState(intitialState);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }

    const remove = (box) => {
        setBoxes(boxes.filter(b => b.id !== box))
    }

    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox}/>
            <div className="boxlist">
                {boxes.map(({id, color, width, height}) => <Box key={id} id={id} color={color} width={width} height={height} remove={remove}/>)}
            </div>
        </div>
    )
}

export default BoxList;