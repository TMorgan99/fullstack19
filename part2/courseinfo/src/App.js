import React from 'react'
import './App.css'

const Header = ({course}) =>
  <h1>{course}</h1>

const Part = ({part}) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({parts}) =>
  <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </>

const Total = ({parts}) =>
  <p>
    Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </p>

const Course = ({course}) =>
  <>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total  parts={course.parts}/>
  </>

const App = () => {

    const course = {
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
    }


  return (
    <div className="App">
      <header className="App-header">
          Course Info
      </header>

      <Course course={course} />

    </div>
  )
}

export default App
