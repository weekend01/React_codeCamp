import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);


  }, [length, numberAllowed, charAllowed])

  const handleCopy = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }
  
  useEffect(() => {
    passwordGenerator();
  } , [length,numberAllowed,charAllowed,passwordGenerator])



  return (
    <>
      <div className='bg-gray-700 w-full max-w-md mx-auto
     shadow-md rounded-lg px-4 py-4 my-8'>
        Password Generator
        <div>
        <div className='flex shadow rounded-lg overflow-hidden my-2'>
          <input
            type="text"
            value={password}
            className='outline-none w-full px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
            <button 
            onClick={handleCopy}
            className='bg-blue-600 h-full p-2 font-bold'>Copy</button>
        </div>
            <div className='flex text-sm gap-x-4'>
              <div className='flex items-center gap-x-4'>
                <input
                 type="range"
                 min={6}
                 max={100}
                 value={length}
                 className='cursor-pointer'
                 onChange={(e) => {
                  setLength(e.target.value)
                 }}
                 />
                  <label >Length: {length}</label>

                  <div className='flex gap-x-1'>
                  <input type="checkbox" name="number" id="number"
                  checked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((value) => !value);
                  }}
                  />
                  <label htmlFor="number">number</label>
                  </div>

                  <div className='flex gap-x-1'>
                  <input type="checkbox" name="char" id="char"
                  checked={charAllowed}
                  onChange={() => {    
                    setCharAllowed((value) => !value);
                  }}
                  />
                  <label htmlFor="char">character</label>
                  </div>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default App
