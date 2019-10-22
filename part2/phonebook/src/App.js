import React, {useEffect, useState} from 'react'
import peopleService from './services/people'
import { Notification, Filter, PeopleForm, PeopleList }  from './components/Phonebook'
import './App.css'

// ////////////////////////////////////////////////////////////////////
const App = () => {
  const [ people, setPeople] = useState([])
  const [ search, setSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('whoops!')

  const handleSearchChange = (event) =>
    setSearch(event.target.value)
  const handleNameChange = (event) =>
    setNewName(event.target.value)
  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)
  //
  // console.log('app load:')
  // //////////////////////////////////////////////////////////////////
  const errorMessageWithTimeout = (message) => {
    setErrorMessage(message)
    setTimeout(()=> {
      setErrorMessage(null)
    }, 5000 )
  }

  // //////////////////////////////////////////////////////////////////
  useEffect(()=>{
      console.log('effect..')
      peopleService.getAll()
        .then(response => {
          console.log('promise fulfilled')
          setPeople(response)
          })
        .catch( error => {
          console.log( error )
          })
      }, [])

  // //////////////////////////////////////////////////////////////////
  const addItem = (event) => {
    // console.log('add item')
    event.preventDefault()
    const newItemObject = {
      name: newName,
      number: newNumber,
    }

    const isFound = people.find(listing => listing.name === newName)
    if (isFound) {
      if (window.confirm(
        `${newName} has already been added to phonebook
        Did you want to update the number?`)) {
        const id = isFound.id
        peopleService.update( id, newItemObject )
        .then(newRecord => {
          const newPeople = people.map( item =>
            id === item.id ? newRecord : item )
          setPeople(newPeople)
          errorMessageWithTimeout(`${newName} has been updated`)
        })
      } else {
        // console.log('update withheld') // no changes
      }
    } else { // create new record
      peopleService.create( newItemObject )
        .then(response => {  // add the 'id' field
          setPeople(people.concat(response))
          errorMessageWithTimeout(`${response.name} has been added`)
        })
        .catch(error => console.log(error))
    }
    setNewName('')
    setNewNumber('')
  }

  // //////////////////////////////////////////////////////////////////
  const removeItem = (id) => {
    // find the record in question!
    // this is not a simple index, we need to find it by id.
    const item = people.filter( p=>p.id===id)[0]
    if ( window.confirm( `Do you want to remove '${item.name}' ?` )) {
        console.log( `The user has requested the removal of ${id}`)
        peopleService.remove(id)
        // this could be a .then chaing?
        setPeople( people.filter(item => item.id !== id) )
        errorMessageWithTimeout(`${item.name} has been removed`)
    }
  }


  // console.log('render', people.length, 'directory entries')
  // //////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        Phonebook
      </header>

      <Notification message={errorMessage} />

      <Filter
        search={ {label: 'search', value: search, handle: handleSearchChange} }
        clear={()=>setSearch('') }
      />

      <PeopleForm
        submit={addItem}
        fields={
          [
            { label: 'name', value: newName, handle: handleNameChange },
            { label: 'number', value: newNumber, handle: handleNumberChange },
          ]}
      />

      <PeopleList people={people} remove={removeItem} filter={search}/>

    </div>
  )
}

export default App
