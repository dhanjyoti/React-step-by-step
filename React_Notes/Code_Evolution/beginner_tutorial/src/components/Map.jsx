import React from 'react'
import Person from './Person'

const MapList = () => {
    const persons = [
        {
            id: 1,
            name: "dj",
            age: 45,
            skill: "react"
        },
        {
            id: 2,
            name: "vj",
            age: 15,
            skill: "angular"
        },
        {
            id: 3,
            name: "jj",
            age: 25,
            skill: "vue"
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
  return (
    <div>
        {personList}
    </div>
  )
}

export default MapList