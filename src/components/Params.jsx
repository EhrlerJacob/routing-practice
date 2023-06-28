import React from "react";
import { useParams } from "react-router-dom";

const Params = (props) => {
    const {word, color, bgCol} = useParams();
    return(
        <div>
            {isNaN(word)?
            <h1 style={
                color?
                {color: color, backgroundColor: bgCol}
                :null
            }>AND THE WORD IS: {word}</h1>
            :
            <h1>
                AND THE WORD IS: {word}
            </h1>
        }
        </div>
    )
}




export default Params;