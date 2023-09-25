import React from "react"
import './parent.css';


const Child = ({ header }) => {
    console.log("Child rendering")

    return (
        <div className="child">
            <h1>{header}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore aliquid, commodi doloribus quae unde debitis obcaecati eius adipisci nihil repudiandae harum at mollitia, natus illo optio odio, nobis expedita.
            </p>
        </div>
    )
}

export default React.memo(Child);