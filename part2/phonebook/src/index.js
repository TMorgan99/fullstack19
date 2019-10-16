import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import axios from 'axios'

axios
  .get('http://localhost:3000/persons')
  .then(response => {
      ReactDOM.render(
        <App data={response.data} />,
        document.getElementById('root')
      )
    })
    .catch( error => {
      console.log( error )
    })

// ReactDOM.render(<App />, document.getElementById('root'))
