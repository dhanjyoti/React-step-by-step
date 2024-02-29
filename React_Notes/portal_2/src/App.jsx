import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Greeting from './components/Greeting';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white'>
        <h1 className='text-5xl font-bold mt-4'>Popup Modal</h1>
        <button onClick={()=> setShowModal(true)} className='bg-violet-500 px-2 py-2 rounded-lg'>Get the eBook</button>
        {showModal && <Modal onClose={()=>setShowModal(false)}/>}
      </div>
      <Greeting/>
    </>
  )
}

export default App
