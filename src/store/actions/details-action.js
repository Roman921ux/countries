import axios from "axios"
import { filterByCode, searchByCountry } from "../../config"

export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const SET_COUNTRY = '@@details/SET_COUNTRY'
export const SET_DETAILS = '@@details/SET_DETAILS'
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS'



const setLoading = () => ({
  type: SET_LOADING,
})
const setError = (err) => ({
  type: SET_LOADING,
  payload: err,
})
const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
})
export const clearDetails = () => ({
  type: SET_DETAILS,
})
const setNeighbors = (countries) => ({
  type: SET_NEIGHBORS,
  payload: countries,
})

// thunk
export const loadCountryByName = (name) => (dispatch, _) => {
  dispatch(setLoading());

  axios.get(searchByCountry(name))
    .then(({ data }) => dispatch(setCountry(data[0])))
    .catch((err) => dispatch(setError(err.message)))
}

export const loadNeighborsByBorder = (borders) => (dispatch, _) => {
  // dispatch(setLoading()); тоже можно такое сделать отдельно

  axios.get(filterByCode(borders))
    .then(({ data }) => dispatch(setNeighbors(data.map(c => c.name.common))))
    .catch(console.error)
  // как я понял {data} нужны из-за особености axios
}