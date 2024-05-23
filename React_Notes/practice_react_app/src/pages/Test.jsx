// import React, { useMemo, useState } from 'react'

// const Test = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(100);

//   const multiMemo = useMemo(function multiCount(){
//     console.log("multicount")
//     return count*3
//   },[count])

//   return (
//     <div>
//       <h2>{count}</h2>
//       <h2>{data}</h2>
//       <h4>{multiMemo}</h4>
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setData(data-1)}>Update Data</button>
//     </div>
//   )
// }

// export default Test


import React, { useEffect, useState } from 'react'

const Test = () => {
  const [data, setData] = useState([]);
  const [click, setClick] = useState([]);
    useEffect(()=>{
      fetch("https://gorest.co.in/public/v2/users")
      .then((response)=>response.json())
      .then((data)=>{
        setData(data)
      })
    },[])

    const handlePrint =(user)=>{
      setClick((prevCheck)=>[...prevCheck, user])
    }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item)=>(<tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>
              <button onClick={()=>handlePrint(item)}>Print</button>
            </td>
          </tr>))}
        </tbody>
        <ul>
          {
            click.map((item)=>(
              <li key={item.id}>
                <span>{item.name}</span>  
                <span>{item.email}</span>  
                <span>{item.gender}</span>  
              </li>
            ))
          }
        </ul>
      </table>
    </div>
  )
}

export default Test