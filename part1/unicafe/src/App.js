import React, { useState } from 'react'
import './App.css'

const Button = ({name, fn}) =>
  <button onClick={fn} > {name} </button>

const Statistic = ({name, value}) =>
  <p> {name} {value} </p>


const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = ( good - bad ) / all
  const positive = good / all * 100.0

  return (all === 0)
    ? ( <h5> No feedback given yet </h5> )
    : ( <>
        <h5> statistics </h5>
          <Statistic name='good' value={good} />
          <Statistic name='neutral' value={neutral} />
          <Statistic name='bad' value={bad} />
          <hr />
          <Statistic name='all' value={all} />
          <Statistic name='average' value={average} />
          <Statistic name='positive' value={positive + '%' } />

      </> )

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusGood = () => { setGood(good +1 )}
  const plusNeutral = () => { setNeutral(neutral +1 )}
  const plusBad = () => { setBad(bad +1 )}

  return (
    <div className="App">
      <header className="App-header">
          Unicafe
      </header>

      <div>
      <h5> give feedback </h5>
        <Button name='good' fn={plusGood}  />
        <Button name='neutral' fn={plusNeutral}  />
        <Button name='bad' fn={plusBad}  />
        <Statistics good={good} neutral={neutral} bad={bad} />

      </div>

    </div>
  )
}

export default App
