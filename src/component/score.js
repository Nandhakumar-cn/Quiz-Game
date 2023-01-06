import React from "react";
import './score.css';
const Score = (props) => { 
    return (
        <div className="score">
             <h3>THANK YOU...!</h3>
            <h2 className="you">Your Score is:
                {
                props.score < props.total
                && props.score > 8 ?(
                    <span className="scores">{props.score}/{props.total}
                   <span className="v1"> ( GOOD)&#9996;</span></span>
                ):
                
                  props.score <= 4 || props.score === 0 ?(
                    <span className="scores">{props.score}/{props.total}
                   <span className="v2"> (VERY BAD..)&#9760;</span></span>
                ):
                (
                <span className="scores">{props.score}/{props.total}
               <span className="v3"> ( VERY GOOD..!)&#9813;</span></span>
            )
                }
                <span className="thums"></span>
                </h2>
               
               
                <button className="but" onClick={props.exit}>Click To Try Again</button>
                <br></br>
                <br></br>
                <button className="but2" onClick={props.exits}>Exit To Main Menu</button>
                <button className="but2" onClick={props.use}>view answers</button>
                

        </div>
    )
}
export default Score;