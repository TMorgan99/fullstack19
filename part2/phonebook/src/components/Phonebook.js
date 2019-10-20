import React from 'react'

// ////////////////////////////////////////////////////////////////////
// format a line in the PhoneList table
const PhoneNumber = ({phoneNumber, remove }) =>
  <tr>
    <td> <button onClick={()=>remove(phoneNumber.id)}> x </button> </td>
    <td>{phoneNumber.name}</td>
    <td>{phoneNumber.number}</td>
  </tr>

// ////////////////////////////////////////////////////////////////////
// show the PhoneList table
const PhoneList = ({phoneNumbers, remove, filter}) => {

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
            <th> [x] </th>
            <th> Name </th>
            <th> Number </th>
          </tr>
          { filteredListings().map( phoneNumber =>
            <PhoneNumber key={phoneNumber.name}
              phoneNumber={phoneNumber} remove={remove} />
          ) }
        </tbody>
      </table>
    </>
  )
}

// ////////////////////////////////////////////////////////////////////
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

// ////////////////////////////////////////////////////////////////////
// add numbers to the list
const PeopleForm = ({submit, fields}) =>
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

export { Filter, PeopleForm, PhoneList }
