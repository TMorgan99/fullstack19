import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import peopleService from './services/people'
import { Filter, PeopleForm, PhoneList }  from './components/Phonebook'
import './App.css'

// ////////////////////////////////////////////////////////////////////
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

  // //////////////////////////////////////////////////////////////////
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

  // //////////////////////////////////////////////////////////////////
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

    peopleService.create( phoneNumberObject )
      .then(response => {
        // add the 'id' field
        setPhoneNumbers(phoneNumbers.concat(response))
        console.log('Added:', response)
      })
      .catch(error => console.log(error))
      .finally(()=>{
        setNewName('')
        setNewNumber('')
      })
  }

  // //////////////////////////////////////////////////////////////////
  const remove = (id) => {
    // find the record in question!
    // this is not a simple index, we need to find it by id.
    const item = phoneNumbers.filter(p=>p.id===id)[0]
    if ( window.confirm( `Do you want to remove '${item.name}' ?` )) {
        console.log( `The user has requested the removal of ${id}`)
        peopleService.remove(id)
        // this could be a .then chaing?
        setPhoneNumbers(
          phoneNumbers.filter(phoneNumber => phoneNumber.id !== id)
        )
    }
  }


  // peopleService.remove( 7 )

  console.log('render', phoneNumbers.length, 'directory entries')
  // //////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        Phonebook
      </header>

      <Filter
        search={ {label: 'search', value: search, handle: handleSearchChange} }
        clear={()=>setSearch('') }
      />

      <PeopleForm
        submit={addPhoneNumber}
        fields={
          [
            { label: 'name', value: newName, handle: handleNameChange },
            { label: 'number', value: newNumber, handle: handleNumberChange },
          ]}
      />

      <PhoneList phoneNumbers={phoneNumbers} remove={remove} filter={search}/>

    </div>
  )
}

export default App
