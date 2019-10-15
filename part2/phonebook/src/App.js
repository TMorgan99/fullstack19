import React, {useState} from 'react'
import './App.css'

const PhoneNumber = ({phoneNumber}) =>
  <tr>
    <td>{phoneNumber.name}</td>
    <td>{phoneNumber.number}</td>
  </tr>

const PhoneList = ({phoneNumbers, filter}) => {

  const filterRegEx = new RegExp(filter, 'i')

  // filter the listings
  const filteredListings = () => {
    return phoneNumbers
      .filter(listing => {
          return listing.name.search(filterRegEx)>=0
      })
  }

  return (
    <>
      <h2>Numbers</h2>
      <table className='center' >
        <tbody>
          <tr>
            <th> Name </th>
            <th> Number </th>
          </tr>
          { filteredListings().map( phoneNumber =>
            <PhoneNumber key={phoneNumber.name} phoneNumber={phoneNumber} />
          ) }
        </tbody>
      </table>
    </>
  )
}

const Filter = ({search, clear}) =>
  <>
    <fieldset>
      <legend>Search</legend>
      <div>
        <label htmlFor="search">search.label</label>
        <input name={search.label} value={search.vaue} onChange={search.handle} />
        <button onClick={clear}> x </button>
      </div>
    </fieldset>
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

      <Filter
        search={ {label: 'search', vaule: {search}, handle: handleSearchChange} }
        clear={()=>setSearch('') }
      />

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
      <PhoneList phoneNumbers={phoneNumbers} filter={search}/>

    </div>
  )
}

export default App
