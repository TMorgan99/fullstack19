import React, { useState } from 'react'
import './App.css'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = ( good - bad ) / all
  const positive = good / all * 100.0

  return (
    <>
      <h5> statistics </h5>
        <p> good {good} </p>
        <p> neutral {neutral} </p>
        <p> bad {bad} </p>
        <hr />
        <p> all {all} </p>
        <p> average {average} </p>
        <p> positive {positive} % </p>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
          Unicafe
      </header>

      <div>
      <h5> give feedback </h5>
        <button onClick={()=>setGood(good +1)}>good</button>
        <button onClick={()=>setNeutral(neutral +1)}>neutral</button>
        <button onClick={()=>setBad(bad +1)}>bad</button>
        { /*
      <h5> statistics </h5>
        <p> good {good} </p>
        <p> neutral {neutral} </p>
        <p> bad {bad} </p>
        <hr />
        <p> all {all} </p>
        <p> average {average} </p>
        <p> positive {positive} % </p>
        */}
        <Statistics good={good} neutral={neutral} bad={bad} />

      </div>

    </div>
  )
}

export default App
