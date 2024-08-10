import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCahrAllowed] = useState(false)
  const [Password, setpassword] = useState("")

  //  UseRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (NumberAllowed) str +='0123456789'
    if (charAllowed) str +='!@#$-%^&_*(){}[]~`'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char)
    }
    
    
    setpassword(pass)

  }, [length, NumberAllowed, charAllowed, setpassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      // passwordRef.current?.setselectionRange(0)
      window.navigator.clipboard.writeText(Password)
    }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, NumberAllowed, charAllowed, passwordGenerator])
  


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input type="text" 
        value={Password} 
        className="outline-none w-full py-1 px-3" placeholder='Password' 
        readOnly
        ref={passwordRef} />

        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
           min={6} 
           max={100} 
           value={length} 
           className='cursor-pointer'
           onChange={(e) => {setlength(e.target.value)}}/>
          <label >Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-2'>
        <input 
          type="checkbox"
          defaultChecked={NumberAllowed} 
          id='numberInput'
          onChange={() => 
                    {setNumberAllowed((prev) => !prev)}}/>
          <label htmlFor='numberInput' >Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={charAllowed} 
          id='charInput'
          onChange={() => 
                    {setCahrAllowed((prev) => !prev)}}/>
          <label htmlFor='characterInput' >Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
