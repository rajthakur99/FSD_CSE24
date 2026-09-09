import React from 'react'

function ICard({data}) {
  return (
    <div style={{border:'2px solid red'}}>
      {/* <h2>ABES Engineering College</h2>
      <h3 style={{color:'yellow',textAlign:'center'}}>Name: Rajkumar Thakur</h3>
      <h3 style={{color:'yellow',textAlign:'center'}}>Branch: CSE </h3>
      <h3 style={{color:'yellow',textAlign:'center'}}>Section: 24</h3>
      <h3 style={{color:'yellow',textAlign:'center'}}>Skills: HTML, CSS, JS</h3> */}

        <div>
          <img src={data.pic} height={200} width={200}></img>
        </div>
        <h2 style={{color:'yellow',textAlign:'center'}}>College:{data.college}</h2>
        <h2 style={{color:'yellow',textAlign:'center'}}>Roll:{data.roll}</h2>
        <h2 style={{color:'yellow',textAlign:'center'}}>Name:{data.name}</h2>
        <h2 style={{color:'yellow',textAlign:'center'}}>Branch:{data.branch}</h2>
        <h2 style={{color:'yellow',textAlign:'center'}}>Section:{data.section}</h2>


      </div>
  )
}

export default ICard