import React, {useState} from 'react'
import './App.css'

const PhoneNumber = ({phoneNumber}) =>
  <tr>
    <td>{phoneNumber.name}</td>
    <td>{phoneNumber.number}</td>
  </tr>

const PhoneList = ({phoneNumbers}) =>
  <>
    <h2>Numbers</h2>
    <table className='center' >
      <tbody>
        <tr>
          <th> Name </th>
          <th> Number </th>
        </tr>
        { phoneNumbers.map( phoneNumber =>
          <PhoneNumber key={phoneNumber.name} phoneNumber={phoneNumber} />
        ) }
      </tbody>
    </table>
  </>

const App = () => {
  const [ phoneNumbers, setPhoneNumbers] = useState([
    { name: 'Arto Hellas', number: '553' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  const handleNameChange = (event) =>
    setNewName(event.target.value)
  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)
  const handleSearchChange = (event) =>
    setSearch(event.target.value)


  const addPhoneNumber = (event) => {
    console.log('add')
    event.preventDefault()
    const phoneNumberObject = {
      name: newName,
      number: newNumber,
    }

    const isFound = phoneNumbers.find(listing => listing.name === newName)
    if (isFound) {
      alert( `${newName} has already been added to phonebook`)
      return
    }

    setPhoneNumbers(phoneNumbers.concat(phoneNumberObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div className="App">
      <header className="App-header">
        Phonebook
      </header>

      <fieldset>
        <legend>Search</legend>
        <div>
          <label htmlFor="search">search</label>
          <input name='search' value={search} onChange={handleSearchChange} />
          <button onClick={()=>setSearch('')}> x </button>
        </div>
      </fieldset>

      <form onSubmit={addPhoneNumber}>
        <fieldset>
          <legend>New Entry</legend>
          <div>
            <label htmlFor="name">name</label>
            <input name='name' value={newName} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="number">number</label>
            <input name='number' value={newNumber} onChange={handleNumberChange} />
          </div>
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
