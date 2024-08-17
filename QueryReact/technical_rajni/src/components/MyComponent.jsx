import { useQuery } from '@tanstack/react-query';
import React from 'react'

const MyComponent = () => {
    const queryKey = "todos";
    const fetchTodos = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json()
    }

    const {data, isLoading, error} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos
    })

    if(isLoading){
        return <div>...Loading my component!</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
  return (
    <div>
        <ul>
            {data.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default MyComponent