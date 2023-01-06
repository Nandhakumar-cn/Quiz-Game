import React from "react";
import './intro.css'

const Intro=(props)=>{
    return (
        <div className="main-content">
            <h1><u>CODENATIVE QUIZ</u></h1>
            <h2>This Quiz Contains 10 Questions</h2>
            <h2>Each Qustions Carries 1 Mark</h2>
            <center>
                <button onClick={props.clickevent}>Test Your Skill</button>
            </center>

        </div>
    )
}
export default Intro