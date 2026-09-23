import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
// import ICardGallery from './components/ICardGallery'
// import MyState from './components/MyState'
// import ColorChange from './components/ColorChange'
// import UpdateName from './components/UpdateName'
import ImageManipulation from './components/ImageManipulation'
function App() {
 

  return (
    <>
    <div>
      
      {/* <MyState/> */}
      {/* <ColorChange/> */}
      {/* <UpdateName/> */}
      <ImageManipulation/>
    </div>
    </>
  )
}

export default App
