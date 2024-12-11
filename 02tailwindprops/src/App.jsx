import { useState } from 'react' 
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-purple-300 p-3 font-semibold'>Tailwind Test</h1>
      <br /> 
      <Card username='Elina'/>
      <br />
      <Card username='Rachel'/>
    </>
  )
}

export default App
