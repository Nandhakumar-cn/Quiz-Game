import React from "react";
import './result.css';
const End =(props) =>{
    return(
        <div className="end">
            <h1>Well Done,<br>
            </br>You Have Completed Successfully!</h1>
        <button onClick={props.click}>view the result</button>
        

        </div>
    )
}
export default End;