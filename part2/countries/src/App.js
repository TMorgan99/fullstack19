import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


const  NoMatches = () =>
  <> no matches at all </>

const ManyMatches = ({size}) =>
  <> {size} too many matches </>

const SelectMatches = ({selections}) =>
  <> select from {selections.length} matches </>

const OneMatch = (country) =>
    <> just one match {country} </>



const Display = ({search, countries}) => {
  const selectedCountries =
    countries
    .filter(country => {
      const searchRegEx = new RegExp(search, 'i')
      return country.name.search(searchRegEx)>=0
    })

  switch (selectedCountries.length) {
    case 0:
      return <NoMatches />
    case 1:
      return <OneMatch country={selectedCountries[0]}/>
    case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
      return <SelectMatches selections={selectedCountries}/>
    default:
      return <ManyMatches size={selectedCountries.length}/>
  }

}

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
      .catch( error => console.log( error ))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
          Countries
      </header>
      { countries.length === 0 ? '---loading---' :
      <>
        <fieldset>
          <label htmlFor="search"> Find Countries: </label>
          <input id="search" value={search} onChange={handleChangeSearch} />
        </fieldset>
        <Display search={search} countries={countries} />
      </>
      }
    </div>
  )
}

export default App
