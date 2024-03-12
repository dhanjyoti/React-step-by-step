import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [loggedIn, setLoggedIn] = useState(3);
  return (
    <div>
        {loggedIn==1?
        <h2>Hello Dhanjyoti</h2>
        :loggedIn==2?<h3>Hello Rabha</h3>
        :<h4>Hello Guest</h4>}
    </div>
  )
}

export default ConditionalRendering;