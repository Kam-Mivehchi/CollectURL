
import { useState } from 'react'
import './App.css';
import Header from './components/Header.js'
import Dashboard from './pages/Dashboard.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import PrivateRoute from './pages/PrivateRoute.js'
import GlobalStyles from './components/styles/Global'
import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './Utils/UserContext'

import SingleList from './pages/SingleList';
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
    <UserProvider>

      <ThemeProvider theme={theme}>

        <GlobalStyles />
        <>
          {/* Navigation  */}
          <Header theme={theme} setTheme={setTheme} options={{ dark: dark, light: light }} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="lists/:listId" element={<PrivateRoute><SingleList /></PrivateRoute>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* workspace needs to have top bar to create the lists and the list library  */}
          {/* <Library /> */}
        </>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
