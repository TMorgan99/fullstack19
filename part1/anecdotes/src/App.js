import React, {useState} from 'react'
import './App.css'

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)


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
