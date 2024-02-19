import React from 'react'
import { useState, useEffect } from 'react'
// router
import { useNavigate } from 'react-router-dom'
//
import axios from 'axios'
// components
import { Controls } from '../components/Controls'
import { ALL_COUNTRIES } from '../config'
import { List } from '../components/List'
import { Card } from '../components/Card'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { selectAllCountries, selectCountriesInfo, selectVisibleCountries } from '../store/selectors/countries-selector'
import { loadCountries } from '../store/actions/countries-action'
import { selectControls, selectRegion, selectSearch } from '../store/selectors/controls-selector'

export const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const search = useSelector(selectSearch);
  // const region = useSelector(selectRegion);
  const { search, region } = useSelector(selectControls);

  const countries = useSelector(state => selectVisibleCountries(state, { search, region }))
  const { status, error, qty } = useSelector(selectCountriesInfo)

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries())
    }
  }, [qty, dispatch])

  function handleClick(name) {
    navigate(`/country/${name}`)
  }



  return (
    <>
      {/* onSearch={handleSearch}  */}
      {/* onClick={() => handleClick(c.name.common)} */}
      <Controls />
      {error && <h2>Can`t fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <List>
          {
            countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name.common,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };
              return <Card key={c.name.common} onClick={() => handleClick(c.name.common)} {...countryInfo} />
            })
          }
        </List>
      )}

    </>
  )
}
