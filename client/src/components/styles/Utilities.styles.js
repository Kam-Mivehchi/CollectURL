import styled from 'styled-components'

export const CenteredContainer = styled.div`
background-color:${({ theme }) => theme.colors.CenteredContainer || 'black'};
min-width:100vw;
display:grid;
place-items:center;
// border-radius:${({ theme }) => theme.borders.outer};
min-height:100vh;
`
export const Input = styled.input`
background-color:${({ bg }) => bg || 'white'};
border:2px solid ${({ border }) => border || 'transparent'};
border-radius:${({ theme }) => theme.borders.input};
max-width:100%;
&:focus{
   outline:2px solid blue;
}

`
export const TextArea = styled.textarea`
background-color:${({ bg }) => bg || 'white'};
border:2px solid ${({ border }) => border || 'transparent'};
border-radius:${({ theme }) => theme.borders.input};

&:focus{
   outline:2px solid blue;
}

`
