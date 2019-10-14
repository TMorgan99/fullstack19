import React, {useState} from 'react'
import './App.css'

const App = ({anecdotes}) => {

  const nextAnecdote = () =>
      Math.floor( Math.random() * anecdotes.length )

  const [selected, setSelected] = useState( nextAnecdote )
  const [votes, setVotes] = useState(
    Array(anecdotes.length).fill(0)
  )

// vote for the 'selected'  elemwnt
  const vote = () => {
    const myCopy = [...votes]
    myCopy[ selected ] += 1
    console.log( myCopy )
    setVotes( myCopy )
  }

  return (
    <div className="App">
      <header className="App-header">
          Anecdotes
      </header>

      <p> <cite> { anecdotes[selected] } </cite> </p>
      <p> this anecdote has {votes[selected]} votes
      <button onClick={()=>vote()} >
        vote
      </button>
      </p>
      <button onClick={()=>setSelected(nextAnecdote)} >
        next Anecdote
      </button>

    </div>
  )
}

export default App
