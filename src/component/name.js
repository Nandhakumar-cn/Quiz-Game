
 import React from 'react'
 import './name.css'
 
 function Name(props) {


   return (
    <div className='entry'>
    <h3>Enter YOUR NAME</h3>
    <input type="text" ></input><br />
    <button  className="sub"onClick={props.enter}>Submit</button>
    
 </div>
   )
 }
 
 export default Name;