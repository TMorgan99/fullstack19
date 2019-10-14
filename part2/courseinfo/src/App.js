import React from 'react'
import './App.css'

const Header = ({course}) =>
  <h1>{course}</h1>

const Part = ({part}) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({parts}) =>
  parts.map( part =>
    <Part key={part.name} part={part} />
  )

const Total = ({parts}) =>
  <p>
    Total of { parts
      .map( part => part.exercises )
      .reduce((a,b) => a+b )
    } exercises
  </p>

const Course = ({course}) =>
  <>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total  parts={course.parts}/>
  </>

const Courses = ({courses}) =>
  courses.map( course =>
    <Course key={course.name} course={course} />
)


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
      name: 'Two Thirds Stack application development',
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
