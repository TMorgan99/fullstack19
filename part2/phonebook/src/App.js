import React, {useEffect, useState} from 'react'
import peopleService from './services/people'
import { Notification }  from './components/Notification'
import { Filter, PeopleForm, PeopleList }  from './components/Phonebook'
import './App.css'

// testing update of edleted record.
const TESTING_REMOTE_DELETE = true

// ////////////////////////////////////////////////////////////////////
const App = () => {
  const [ people, setPeople] = useState([])
  const [ search, setSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ classMessage, setClassMessage ] = useState(null)

  const handleSearchChange = (event) =>
    setSearch(event.target.value)
  const handleNameChange = (event) =>
    setNewName(event.target.value)
  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  // console.log('app load:')
  // //////////////////////////////////////////////////////////////////
  const notificationWithTimeout = (classMessage) => {
    console.log( 'setup', classMessage)
    setClassMessage(classMessage)
    setTimeout(()=> { setClassMessage(null) }, 2500)
  }

  // //////////////////////////////////////////////////////////////////
  useEffect(()=>{
      console.log('effect..')
      // notificationWithTimeout('info:please wait for the data to load')
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
  const updateItem = (id, newItemObject) => {
    if (TESTING_REMOTE_DELETE)
      peopleService.remove(id)  // simulate the other client
    // but do not update our UI

    peopleService.update( id, newItemObject )
      .then(newRecord => {
        const newPeople = people.map( item => item.id === id ? newRecord : item )
        setPeople(newPeople)
        notificationWithTimeout( `info:${newName} has been updated` )
      })
      .catch(error => {
        console.log('deleted record:', error)  // code 404
        notificationWithTimeout( `error:this record has been deleted remotely` )
        // refresh with server
        peopleService.getAll()
          .then(response => {
            console.log('refresh')
            setPeople(response)
          })
          .catch( error => { console.log( error ) })
      })
  }

  // //////////////////////////////////////////////////////////////////
  const addItem = (event) => {
    // console.log('add item')
    event.preventDefault()
    const newItemObject = {
      name: newName,
      number: newNumber,
    }

    const isFound = people.find(listing => listing.name === newName)
    if (isFound && window.confirm(
        `${newName} has already been added to phonebook
        Did you want to update the number?`)) {
          updateItem(isFound.id, newItemObject)
        }
    else { // create new record
      peopleService.create( newItemObject )
        .then(response => {  // add the 'id' field
          setPeople(people.concat(response))
          notificationWithTimeout( `info:${response.name} has been added` )
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
      notificationWithTimeout(`info:${item.name} has been removed`)
    }
  }


  // console.log('render', people.length, 'directory entries')
  // //////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        Phonebook
      </header>

      <Notification classMessage={classMessage} />

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
