import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Search } from './Search'
import { CustomSelect } from './CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { selectRegion } from '../store/selectors/controls-selector'
import { setRegion } from '../store/actions/controls-action'

const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap) // что это???

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  align-items: flex-start;

  @media(min-wigth: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Controls = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion)

  const handleSelect = (region) => {
    dispatch(setRegion(region?.value || ''))
    // проверяет ?. на наличие свойства, если его нет то || он сохранит ''
  }
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={optionsMap[region]}
        onChange={handleSelect}
      />
    </Wrapper>
  )
}
