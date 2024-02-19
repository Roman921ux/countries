import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { filterByCode } from '../config';
import { useDispatch, useSelector } from 'react-redux';
import { selectNeighbors } from '../store/selectors/details-selectors';
import { loadNeighborsByBorder } from '../store/actions/details-action';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  // grid-template-columns: repeat(1fr);
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @madia (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @madia (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;
const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal)
`;
const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;
const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;
const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;


export const InfoFullCard = ({ country, navigate }) => {
  const dispatch = useDispatch()
  const neighbors = useSelector(selectNeighbors)

  useEffect(() => {
    if (country.borders) {
      dispatch(loadNeighborsByBorder(country.borders))
    }
    console.log('neighbors =>', neighbors)
  }, [country.borders, dispatch])


  return (
    <Wrapper>
      <InfoImage src={country.flags.svg} />
      <div>
        <InfoTitle>{country.name.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Population:</b> {country.population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {country.region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {country.subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {country.capital}
              {/* // везде ли он как объект? */}
            </ListItem>
          </List>
          <List>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!country.borders ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map(b => <Tag key={b} onClick={() => navigate(`/country/${b}`)}>{b}</Tag>)}
              {/* {console.log(neighbors)} */}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  )
}
