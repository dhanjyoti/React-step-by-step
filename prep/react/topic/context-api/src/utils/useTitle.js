import React, { useEffect } from 'react'

const useTitle = (props) => {
    useEffect(()=>{
        document.title = props + " count hit!"
    })
}

export default useTitle