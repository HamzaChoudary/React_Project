
// The useState is called the hooks there is many kind of hooks like setcounter,  setmemo, like this
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // here is also use hooks {setCounter}
  let [counter, setCounter] = useState(15)


  // let counter = 15;

   const addValue = () => {
      // counter = counter + 1;
      setCounter(counter + 1)
      // this if statement we create as a assignment
      if (counter === 20) {
        setCounter(counter => 15)
      }
  }


  const remoevalue = () => {
    setCounter(counter - 1)
    // this if statement we create as a assignment 
    if (counter === 0) {
      setCounter(counter => 15)
    }
  }
 

  return (
    <>
      <h1>Hamza Choudary</h1>
      <h3>Vite value: {counter}</h3>

      <button onClick={addValue}>Add Value {counter}</button>
       <br />
      <button onClick={remoevalue}>Remove Value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
