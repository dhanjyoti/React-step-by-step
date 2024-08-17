import { useQuery } from '@tanstack/react-query';
import React from 'react'

const Contact = () => {
    const fetchTodos = async ()=> {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        return response.json();
    }

    const {data, isLoading, isError, error, isSuccess, status} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        // enabled: false,
        // refetchInterval: 5000,
        staleTime: 6000,
        cacheTime: 10*(60*1000)
    })
    console.log(isError, error);

    // if(isLoading) return <button onClick={()=> refetch()}>Some Button</button>
    // if(status === "success") return <div>Done...</div>
    if(isLoading) return <div>...Loading</div>
    if(error) return <div>Error: {error.message}</div>
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

export default Contact