import React from "react";
import './Box.css';

const Box = ({id, color, width, height, remove}) => {
    return (
        <div className="Box"
        style={{height: `${height}px`, width: `${width}px`, backgroundColor: color}}>
            <button onClick={() => remove(id)}>X</button>
        </div>
    )
}

export default Box;