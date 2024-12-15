import { useState } from 'react'
import './App.css'
import AddTODO from './components/AddTODO';

let count = 0;

function App() {
  const [list,setList] = useState([])
  const [task, setTask] = useState('');

  const handleCancel = (id) =>{
    setList(list.filter(item => item.id !== id ))
  }

  const handleAdd = () => {
    setList([...list, { id: count++, name: task }]);
    setTask('');
  };
  

  return (
    <>
      <div>
        <h2 className='text-2xl text-white font-bold'>Manage Your Todos</h2>
        <br />
        <div>
          <input type="text"
            value={task}
            onChange={(e) => { setTask(e.target.value) }}
            placeholder='Write Todo..'
            className='bg-gray-500 p-2 w-[40%] rounded-l-md text-gray-800'
          />
          <button
            onClick={handleAdd}
            className='bg-green-400 p-2 w-14 rounded-r-lg'
          >Add</button>
        </div>

        <div>
          {
            list.map(item => (
              <li key={item.id}>
                <AddTODO task={item} handleCancel = {handleCancel}/>
              </li>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
