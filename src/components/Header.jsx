import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// roter
import { Link } from 'react-router-dom';
// components
import { Container } from './Container'
// ant
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/actions/theme-action';
import { clearControls } from '../store/actions/controls-action';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base)
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({ to: '/', })`
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
  // const [theme, setTheme] = useState('light')
  // const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }
  const cleanUp = () => dispatch(clearControls())

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (<HeaderEl>
    <Container>
      <Wrapper>
        <Title onClick={cleanUp}>Where is the world?</Title>
        <ModeSwitcher onClick={() => toggleTheme()}>
          {theme === 'light' ?
            (<SunOutlined />) :
            (<MoonOutlined />)}
          <span style={{ marginLeft: '0.75rem' }}>{theme} theme</span>
        </ModeSwitcher>
      </Wrapper>
    </Container>
  </HeaderEl>)
}
