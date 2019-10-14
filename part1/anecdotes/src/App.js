import React, {useState} from 'react'
import './App.css'

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(
    Math.floor( Math.random() * anecdotes.length )
  )
  
  return (
    <div className="App">
      <header className="App-header">
          Anecdotes
      </header>

      { anecdotes[selected] }
    </div>
  )
}

export default App
