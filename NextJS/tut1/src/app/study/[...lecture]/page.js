"use client"
export default function Lecture({params}){
    console.log(params)
    return (
        <div>
            <h2>Day of College {params.lecture[0]}</h2>
            <h2>Lecture No {params.lecture[1]}</h2>
        </div>
    )
}