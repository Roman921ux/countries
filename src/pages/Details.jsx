import React, { useEffect, useState } from 'react'
// router
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { searchByCountry } from '../config';
import axios from 'axios';
import { Button } from '../components/Button';
import { InfoFullCard } from '../components/InfoFullCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCountry, selectDetails } from '../store/selectors/details-selectors';
import { clearDetails, loadCountryByName } from '../store/actions/details-action';


export const Details = () => {
  // const [country, setCountry] = useState(null)
  const dispatch = useDispatch()
  const { currentCountry, error, status } = useSelector(selectDetails)
  const { name } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadCountryByName(name))
    console.log('currentCountry =>', currentCountry)

    return () => {
      dispatch(clearDetails())
      // будет всегда срабатывать когда меняется [name, dispatch]
      // сам не понял зачем это добавлять, какой-то баг типо решили, но к меня и без этого все хорошо было )
    }
  }, [name, dispatch])


  return (
    <>
      {/* <Link to='/'><Button>Go back</Button></Link> */}
      <Button onClick={() => navigate('/')}>Go back</Button>
      {/* <Button onClick={() => navigate(-1)}>Go back</Button> */}
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <InfoFullCard country={currentCountry} navigate={navigate} />}
    </>
  )
}
