import React, {useState} from 'react'
import './App.css'

const App = ({anecdotes}) => {

  const nextAnecdote = () =>
      Math.floor( Math.random() * anecdotes.length )

  const [selected, setSelected] = useState( nextAnecdote )

  return (
    <div className="App">
      <header className="App-header">
          Anecdotes
      </header>

      <p> { anecdotes[selected] } </p>
      <button
          onClick={()=>setSelected(nextAnecdote)} >
        next Anecdote
      </button>

    </div>
  )
}

export default App
