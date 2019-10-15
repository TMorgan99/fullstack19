import React, {useState} from 'react'
import './App.css'

// format a line in the PhoneList table
const PhoneNumber = ({phoneNumber}) =>
  <tr>
    <td>{phoneNumber.name}</td>
    <td>{phoneNumber.number}</td>
  </tr>

// show the PhoneList table
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

// simple field for unputs
const Field = ({label, value, handle}) =>
  <>
    <label htmlFor="name">{label}</label>
    <input name={label} value={value} onChange={handle} />
  </>

// input searach filter
const Filter = ({search, clear}) =>
  <>
    <fieldset>
      <legend>Search</legend>
      <div>
        <Field label={search.label} value={search.value} handle={search.handle} />
        <button onClick={clear}> x </button>
      </div>
    </fieldset>
  </>

// add numbers to the list
const PhoneNumberForm = ({submit, fields}) =>
  <form onSubmit={submit}>
    <fieldset>
      <legend>New Entry</legend>
      <div>
        <Field label={fields[0].label} value={fields[0].value} handle={fields[0].handle} />
      </div>

      <div>
        <Field label={fields[1].label} value={fields[1].value} handle={fields[1].handle} />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </fieldset>
  </form>

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
        search={ {label: 'search', value: search, handle: handleSearchChange} }
        clear={()=>setSearch('') }
      />

      <PhoneNumberForm
        submit={addPhoneNumber}
        fields={
          [
            { label: 'name', value: newName, handle: handleNameChange },
            { label: 'number', value: newNumber, handle: handleNumberChange },
          ]}
      />

      <PhoneList phoneNumbers={phoneNumbers} filter={search}/>

    </div>
  )
}

export default App
