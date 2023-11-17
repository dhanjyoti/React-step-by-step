import React, { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState('olive');
    // function changeColor(color){
    //     setColor(color);
    // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-1'>
                <button
                    onClick={() => setColor('red')}
                    className='outline-none px-4 py-1 rounded-full text-gray-900 shadow-lg bg-red-600'
                >test 1</button>
                <button
                    onClick={() => setColor('green')}
                    className='outline-none px-4 py-1 rounded-full text-gray-900 shadow-lg bg-green-600'
                >test 2</button>
                <button
                    onClick={() => setColor('blue')}
                    className='outline-none px-4 py-1 rounded-full text-gray-900 shadow-lg bg-blue-600'
                >test 3</button>
                <button
                    onClick={() => setColor('gray')}
                    className='outline-none px-4 py-1 rounded-full text-gray-900 shadow-lg bg-gray-600'
                >test 4</button>
                <button
                    onClick={() => setColor('cyan')}
                    className='outline-none px-4 py-1 rounded-full text-gray-900 shadow-lg bg-cyan-600'
                >test 5</button>
                <button
                    onClick={() => setColor('purple')}
                    className='outline-none px-4 py-1 rounded-full text-gray-900 shadow-lg bg-purple-600'
                >test 6</button>
            </div>  
        </div>
    </div>
  )
}

export default BgChanger