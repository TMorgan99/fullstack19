import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const Weather = ({location}) =>
  <p> Sunny as always in {location} </p>

const OneCountry = ({country}) =>
  <>
    <h2> {country.name} </h2>
    capital: { country.capital} <br />
    population: { country.population} <br />
    <h4> languages: </h4>
    { country.languages.map(language =>
        <li key={language.name}>{language.name}</li>
    ) }
    <img alt='flag' src={country.flag} height="75"/>
    <Weather location={country.capital}/>
  </>

const Country = ({country}) =>
  <li> {country.name} </li>

const NoMatches = () =>
  <div className='none'>
    <h3>No Countries Match the Search </h3>
  </div>

const ManyMatches = ({selectedCountries}) =>
  <div className='many'>
    <h3> {selectedCountries.length} Countries Match the Search </h3>
  </div>

const OneMatch = ({selectedCountries}) =>
  <div className='one'>
    <OneCountry country={selectedCountries[0]} />
  </div>

const SeletableMatches = ({selectedCountries}) =>
  <div className='selectable'>
    <h3> {selectedCountries.length} Countries Match the Search </h3>
    <ol>
      { selectedCountries.map( country =>
        <Country key={country.name} country={country} />
      )}
    </ol>
  </div>


const Results = ({search, countries}) => {
  const searchRegEx = new RegExp(search, 'i')

  const selectedCountries =
    countries
    .filter(country => {
      return country.name.search(searchRegEx)>=0
    })

    switch (selectedCountries.length) {
      case 0:
        return <NoMatches />
      case 1:
        return <OneMatch selectedCountries={selectedCountries} />

      case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
        return <SeletableMatches selectedCountries={selectedCountries} />
      default:
        return <ManyMatches selectedCountries={selectedCountries} />
    }

// not reachable ..
    return (
      <> {selectedCountries.length} countries leftover </>
    )
}

// =====================================================================
const App = (props) => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }
  // ===== HOOKS ======================================================
    // console.log('*** firing load_countries Effect')
  useEffect(()=>{
    const url = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(url)
      .then(response => {
        setCountries(response.data)
      })
    }, []
  )

    // console.log('render')
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
        < Results countries={countries} search={search} />
      </>
      }
    </div>
  )
}

// =====================================================================
export default App
