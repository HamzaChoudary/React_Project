import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState{0}

  let myObj = {
    username: 'hamza',
    age:21
  }
  let newArr = [1,2,3];

  
  return (
    <>
     <h1 className='bg-green-400 text-black p-2 rounded-xl mb-4' >Tailwind test</h1>
    <Card username="Hamza Choudary" btnText="Click here"  />
    <Card username="Hamza Sarwar" btnText="Visit here" />
    </>
  )
}

export default App
