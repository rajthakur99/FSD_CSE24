import React from 'react'
import { useState } from 'react'

function ColorChange() {
    const[red,SetRed]=useState(0);
    const[green,SetGreen]=useState(0);
    const[blue,SetBlue]=useState(0);

    function setColor1(){
        SetRed(255);
        SetGreen(0);
        SetBlue(0);
    }
    function setColor2(){
        SetRed(0);
        SetGreen(255);
        SetBlue(0);
    }
    function setColor3(){
        SetRed(0);
        SetGreen(0);
        SetBlue(255);
    }
  return (
    <div>
        <div style={{height:"200px", width:'300px', backgroundColor:`rgb(${red},${green},${blue})`}}></div>
        <h2>Color</h2>
        <div>
        <button onClick={setColor1}>Red</button>
        <button onClick={setColor2}>Green</button>
        <button onClick={setColor3}>Blue</button> 
        </div>
    </div>
  )
}

export default ColorChange