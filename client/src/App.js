import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Library from './components/Library.js'
// import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import ListView from './components/ListView';
const theme = {
  colors: {
    header: '#ebfbff',
    bucketText: '#000000',
    bucketBackground: 'gray',
    mainText: '#000000',
    mainBackground: 'white',
    controlBarText: '#000000',
    controlBarBackground: 'lightblue',
    listRowText: '#000000',
    listRowBackground: 'inherit',
    newListButtonText: '#000000',
    newListButtonBackground: 'lightblue',
    cardText: '#000000',
    cardBackground: 'white',

  },
  mobile: '768px',
  borders: {
    inner: '.75rem',
    outer: '1.25rem',
    input: '.25rem'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles />
      <>
        {/* Navigation  */}
        <Header />
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
