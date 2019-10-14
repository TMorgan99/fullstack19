import React, {useState} from 'react'
import './App.css'

const App = ({anecdotes}) => {
  const nextAnecdote = () =>
    Math.floor( Math.random() * anecdotes.length )

  // ties awarded to the leftmost
  const trending = () => {
    const greatestScore = Math.max.apply(null, votes)
    return votes.indexOf(greatestScore)
  }

  // vote for the 'selected' elemwnt
  const vote = () => {
    const myCopy = [...votes]
    myCopy[ selected ] += 1
    console.log( myCopy )
    setVotes( myCopy )
  }

  // state
  const [selected, setSelected] = useState( nextAnecdote )
  const [votes, setVotes] = useState(
    Array(anecdotes.length).fill(0)
  )

  return (
    <div className="App">
      <header className="App-header">
          Anecdotes
      </header>

      <h3> Anecdote of the day </h3>
      <p> <cite> { anecdotes[selected] } </cite> </p>
      <p> this anecdote has {votes[selected]} votes
      <button onClick={()=>vote()} >
        vote
      </button>
      </p>
      <button onClick={()=>setSelected(nextAnecdote)} >
        next Anecdote
      </button>
      <h4> Trending Anecdote </h4>
      <p> <cite> { anecdotes[trending()] } </cite> </p>

    </div>
  )
}

export default App
