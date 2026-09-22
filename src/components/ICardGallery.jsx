import React from 'react'
import ICard from './ICard'
import image from '../images/Rajkumar.jpg'
function ICardGallery() {
    const student=[{
        pic:image,
        college:'ABES Engineering College',
        roll:'245965',
        name:'ram',
        branch:'CSE',
        section:'24'
    },
        {
        pic:image,
        college:'ABES Engineering College',
        roll:'255665',
        name:'rahul',
        branch:'CSE-DS',
        section:'25'
    },
      {
        pic:image,
        college:'ABES Engineering College',
        roll:'87565',
        name:'Aman',
        branch:'CSE-AIML',
        section:'26'
    },
]

  return (
    <div>
        {/* <ICard pic={image} college="ABES Engineering College" roll="67639" name="Rahul" branch="CSE" section="24"  />
        <ICard  college="ABES Engineering College" roll="57899" name="Raj" branch="CSE-DS" section="25" pic="https://tse2.mm.bing.net/th/id/OIP.rVMUJvCMZNaEePDwTlH_7QHaHa?r=0&pid=Api&P=0&h=180"/>
        <ICard  college="ABES Engineering College" roll="12345" name="Aman" branch="AIML" section="25" pic="https://tse2.mm.bing.net/th/id/OIP.aH3OUZF8zVYUadaszpsSxwHaDt?r=0&pid=Api&P=0&h=180"/> */}
    {/* <ICard data={student[0]} /> */}

    {
        student.map((ele)=>(
            <ICard data={ele} />
        ))
    }
    </div>
  )
}

export default ICardGallery