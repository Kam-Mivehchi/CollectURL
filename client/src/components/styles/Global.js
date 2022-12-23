import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.primary};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}

button{
  padding:.75rem 1.4rem;
  transition: transform .2s ease-out ;
  &:hover{
    transform:scale(1.1);
    box-shadow: 0 0 .25em  2px rgb(0,0,0,.2) inset;
  }
  &:active{
    transform:scale(.9);
  }
 &:disabled{
    opacity:.5;
  }
}

::-webkit-scrollbar {
  height:10px ;
  width:10px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borders.outer} ;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borders.outer} ;
  
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borders.outer} ;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.colors.gray};
 
}
`

export default GlobalStyles

