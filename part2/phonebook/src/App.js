import React, {useState} from 'react'
import { Filter, PhoneNumberForm, PhoneList }  from './components/Phonebook'
import './App.css'


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
