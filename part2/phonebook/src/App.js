import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import peopleService from './services/people'
import { Filter, PhoneNumberForm, PhoneList }  from './components/Phonebook'
import './App.css'

const App = () => {
  console.log('app load:')
  const [ phoneNumbers, setPhoneNumbers] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  const handleNameChange = (event) =>
    setNewName(event.target.value)
  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)
  const handleSearchChange = (event) =>
    setSearch(event.target.value)

  useEffect(()=>{
      console.log('effect..')
      peopleService.getAll()
        .then(response => {
          console.log('promise fulfilled')
          setPhoneNumbers(response)
          })
        .catch( error => {
          console.log( error )
          })
      }, [])

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
    peopleService.create( phoneNumberObject )
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  console.log('render', phoneNumbers.length, 'directory entries')
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
