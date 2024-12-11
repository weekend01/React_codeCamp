import { useState } from 'react'
import './App.css'
import Color from './components/Color'

function App() { 

  const [color, setColor] = useState('black')

  return (
    <>
      <div style={{ backgroundColor: color }} className='w-full h-screen flex items-center' id='appID'>
        <div className='fixed flex flex-wrap bg-lime-50 p-3 rounded-2xl'>
          <Color color='Red' setBgColor={setColor} />
          <Color color='Green' setBgColor={setColor} />
          <Color color='Blue' setBgColor={setColor} />
          <Color color='Olive' setBgColor={setColor} />
          <Color color='Gray' setBgColor={setColor} />
          <Color font='black' color='Yellow' setBgColor={setColor} />
          <Color font='black' color='Pink' setBgColor={setColor} />
          <Color color='Purple' setBgColor={setColor} />
          <Color font='black' color='Lavender' setBgColor={setColor} />
          <Color font='black' color='White' setBgColor={setColor} />
          <Color color='Black' setBgColor={setColor} />
        </div>
      </div>
    </>
  )
}

export default App
