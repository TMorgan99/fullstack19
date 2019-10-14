import React from 'react'

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

export default Courses
