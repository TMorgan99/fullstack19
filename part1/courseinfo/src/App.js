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

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

    // const course = 'Half Stack application development'
    // const part1 = {
    //   name: 'Fundamentals of React',
    //   exercises: 10
    // }
    // const part2 = {
    //   name: 'Using props to pass data',
    //   exercises: 7
    // }
    // const part3 = {
    //   name: 'State of a component',
    //   exercises: 14
    // }

    // const course = 'Half Stack application development'
    // const parts = [
    //   {
    //     name: 'Fundamentals of React',
    //     exercises: 10
    //   },
    //   {
    //     name: 'Using props to pass data',
    //     exercises: 7
    //   },
    //   {
    //     name: 'State of a component',
    //     exercises: 14
    //   }
    // ]

    const course = {
      name: 'Half Stack application development',
      parts: [
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

      <div>
      { /*
        <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      */ }

        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total  parts={course.parts}/>
      </div>

    </div>
  )
}

export default App
