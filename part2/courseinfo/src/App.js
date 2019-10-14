import React from 'react'
import Courses from './components/Courses'
import './App.css'

const App = () => {

    const courses = [
      {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of HTML MVC and Electrical Technologies',
            exercises: 74
          },
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      },

    {
      name: 'Seven Eights Stack application development',
      parts: [
        {
          name: 'Fundamentals of HTML MVC and Electrical Technologies',
          exercises: 74
        },
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using console.log to log data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
          Course Info
      </header>

      <Courses courses={courses} />

    </div>
  )
}

export default App
