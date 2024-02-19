import { combineReducers } from 'redux'
// reducers
import { themeReducer } from './theme-reducer'
import { countriesReducer } from './countries-reducer'
import { controlsReducer } from './controls-reducer'
import { detailsReducer } from './details-reducer'

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer,
})