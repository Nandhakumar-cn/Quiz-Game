import React from 'react'
import './answers.css'

function Answers(props) {

  return (
    <div>
        <h1 className='bala'><u>correct answers</u></h1>
         <ol className='o1'>
          <li className='b1'>c)2002</li>
          <li className='b1'>c)Vatican City</li>
          <li className='b1'>b)Nasik</li>
          <li className='b1'>d)A. Robert E. Kahn and Vint Cerf</li>
          <li className='b1'>b)Shiva Ayyadurai</li>
          <li className='b1'>d)Apple</li>
          <li className='b1'>d)Jupiter</li>
          <li className='b1'>b)China</li>
          <li className='b1'>d)Antartica</li>
          <li className='b1'>c)Uniform Resource Locator</li>

         </ol>
        <button className='buttons' onClick={props.rest} >Exit</button>
        
    </div>
  )
};

export default Answers;