import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Header from './components/Header.js'
import Library from './components/Library.js'

// import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'


import ListView from './components/ListView';
const light = {
  colors: {
    primary: "#EDEDED",
    secondary: "#CFD2CF",
    accent: '#EB1D36',
    accent2: '#A2B5BB',
    cardText: 'black',
    cardBackground: '#ffffff',
    light: '#ffffff',
    header: '#ebfbff',


  },
  mobile: '768px',
  borders: {
    inner: '.75rem',
    outer: '1.25rem',
    input: '.25rem',
    button: '.5rem'
  }
}
const dark = {
  colors: {
    primary: "#252525",
    secondary: "#282A3A",
    accent: '#C69749',
    accent2: '#735F32',
    cardBackground: 'black',
    cardText: '#ffffff',
    textPrimary: '#252525',
    light: '#ffffff',
    header: '#ebfbff',


  },
  mobile: '768px',
  borders: {
    inner: '.75rem',
    outer: '1.25rem',
    input: '.25rem',
    button: '.5rem'
  }
}

function App() {
  const [theme, setTheme] = useState(light)
  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles />
      <>
        {/* Navigation  */}
        <Header theme={theme} setTheme={setTheme} options={{ dark: dark, light: light }} />

        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="lists/:listId" element={<ListView />} />
        </Routes>
        {/* workspace needs to have top bar to create the lists and the list library  */}
        {/* <Library /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
