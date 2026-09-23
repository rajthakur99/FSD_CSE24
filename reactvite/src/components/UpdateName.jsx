import React, { useState } from 'react'

function UpdateName() {
    const [name,setName]= useState('Aman');
    const [college, setCollege] = useState('KIET');

    function changeName(){
        setName('Rajkumar Thakur');
    }
    function changeCollege(){
        setCollege('ABES Engineering College, Ghaziabad');
    }
  return (
    <div>
        <h2>College Name = {college} </h2>
        <h2>Name= {name}</h2>
        <button onClick={changeName}>ChangeName</button>
        <button onClick={changeCollege}>ChangeCollege</button>
    </div>
  )
}

export default UpdateName