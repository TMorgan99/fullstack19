import React, {useState} from 'react'
import './App.css'

const PhoneNumber = ({phoneNumber}) =>
  <>
    {phoneNumber.name}
    <br />
  </>

const PhoneList = ({phoneNumbers}) =>
  <>
    <h2>Numbers</h2>
    { phoneNumbers.map( phoneNumber =>
      <PhoneNumber key={phoneNumber.name} phoneNumber={phoneNumber} />
    ) }
  </>

const App = () => {
  const [ phoneNumbers, setPhoneNumbers] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) =>
    setNewName(event.target.value)

  const addPhoneNumber = (event) => {
    console.log('add')
    event.preventDefault()
    const phoneNumberObject = {
      name: newName,
    }

    setPhoneNumbers(phoneNumbers.concat(phoneNumberObject))
    setNewName('')
  }

  return (
    <div className="App">
      <header className="App-header">
        Phonebook
      </header>

      <form onSubmit={addPhoneNumber}>
        <fieldset>
          <legend>Phonebook</legend>
          <label htmlFor="name">name</label>
          <input name='name' value={newName} onChange={handleNameChange} />
          <div>
          <button type="submit">add</button>
          </div>
        </fieldset>
      </form>
      <PhoneList phoneNumbers={phoneNumbers} />

    </div>
  )
}

export default App
