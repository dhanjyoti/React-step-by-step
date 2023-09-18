import {useRef, useEffect} from 'react'

const Focus = () => {
    const inputElementRef = useRef();

    useEffect(()=> {
        inputElementRef.current.focus();
        inputElementRef.current.style.backgroundColor = 'grey';
        inputElementRef.current.style.color = 'white';
    }, []); 

  return (
    <input type='text' ref={inputElementRef} />
  )
}

export default Focus