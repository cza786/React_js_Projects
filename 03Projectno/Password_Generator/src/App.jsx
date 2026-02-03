import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [Counter, setcounter] = useState(15);
  // let Counter = 5;

  const addValue = () => {
    console.log("Button Clicked", Counter);
   Counter = Counter + 1;
   setCounter(Counter);
  }

  const removeValue = () => {
    console.log("Button Clicked", math.random());
   Counter = Counter - 1;
   setCounter(Counter);
  }

  return (
    <>
      <h1>Chand and React</h1>
      <h1>By Default Count: {Counter}</h1>
<br />
      <button onClick={addValue}> Add Value </button>
      <button onClick={removeValue}> Remove Value </button>
      
    </>
  )
}

export default App
