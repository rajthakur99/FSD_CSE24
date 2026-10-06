import React, { useState } from 'react'
import cat from '../images/cat.png';

function ImageManipulation() {
    const[catHeight,setCatHeight]=useState(200);
    const[catWidth,setCatWidth]=useState(200);
    const[red,SetRed]=useState(0);
    const[green,SetGreen]=useState(0);
    const[blue,SetBlue]=useState(0);
    const[catAngle,setCatAngle]=useState(30);

    function increaseHeight(){
        setCatHeight(catHeight+10);
    }
    function increaseWidth(){
        setCatWidth(catWidth+10);
    }

    function changeBGColor(){
        SetRed(Math.random()*255);
        SetGreen(Math.random()*255);
        SetBlue(Math.random()*255);
    }

    function imageRotate(){
        setCatAngle(catAngle+30);
    }
  return (
    <div>
        <h2 style={{textAlign:'center'}} >ImageManipulation</h2>
        <div style={{backgroundColor:`rgb(${red},${green},${blue})` ,height:'300px', width:'300px',border:'4px solid red', marginLeft:'40%', marginTop:'1%'}}>
        <img src={cat} height={catHeight} width={catWidth} style={{transform:`rotate(${catAngle}deg)`}}/>
        </div>
        <div style={{marginLeft:'40%', marginTop:'1%'}}>
            <button onClick={increaseHeight}>increaseHeight</button>
            <button onClick={increaseWidth}>increaseWidth</button>
            <button onClick={changeBGColor}>ChangeBGColor</button>
            <button onClick={imageRotate}>ImageRotate</button>
        </div>
    </div>
  )
}

export default ImageManipulation