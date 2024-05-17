import React, { useCallback, useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState([]);

    const debounce = (func)=>{
        let timer;
        return function (...args){
            const context = this;
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        }
    }

    // const handleChange = async (e) => {
    //     const { value } = e.target;
    //     try {
    //       const response = await fetch(`https://demo.dataverse.org/api/search?q=${value}`);
    //       const json = await response.json();
    //       setSearch(json.data.items);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //     console.log(value);
    //   };    
    
    const handleChange =(e)=>{
        const {value} = e.target;
        fetch(`https://demo.dataverse.org/api/search?q=${value}`)
        .then(res => res.json())
        .then(json => setSearch(json.data.items))
        console.log(e.target.value)
    }
    // useCallback provides us the memoized callback
    const optimizedVersion = useCallback(debounce(handleChange), []);

    return (
    <div>
        <input type='text' name='search' onChange={optimizedVersion} placeholder='Search'/><br/><br/>
        {search?.length > 0 &&
            <div>
                {search.map((item, i)=>(
                    <div key={i}>{item.name}</div>
                ))}
            </div>
        }
    </div>
  )
}

export default Search