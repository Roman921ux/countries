import axios from "axios"

export const SET_COUNTRIES = '@@country/SET_COUNTRIES'
export const SET_LOADING = '@@country/SET_LOADING'
export const SET_ERROR = '@@country/SET_ERROR'

// api
import { ALL_COUNTRIES } from "../../config"

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
})
export const setLoading = () => ({
  type: SET_LOADING,
})
export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
})

// (dispatch, getState, {client - axios, api - config.js})
export const loadCountries = () => (dispatch, _) => {
  dispatch(setLoading())

  axios.get(ALL_COUNTRIES)
    .then(({ data }) => dispatch(setCountries(data)))
    .catch((err) => dispatch(setError(err.message)))
}