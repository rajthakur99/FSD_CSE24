import React,{useEffect, useState} from 'react'

function MyUseEffect() {
    const[counter,setCounter]=useState(0);
    const[pointer,setPointer]=useState(100);

    function increaseCounter(){
        setCounter(counter+10);
    }

    function decreasePointer(){
        setPointer(pointer-10);
    }

    useEffect(()=>{
        // console.log("Hii.. using UseState Hook");
        console.log("counter="+counter)
        console.log("Pointer="+pointer)
    },[pointer,counter])
  return (
    <div>
        <h2>Counter App</h2>
        <h1 style={{color:"red"}}>Counter Value={counter}</h1>
        <h1 style={{color:"green"}}>Pointer Value={pointer}</h1>
        <button onClick={increaseCounter}>counter</button>
        <button onClick={decreasePointer}>pointer</button>
    </div>
  )
}

export default MyUseEffect