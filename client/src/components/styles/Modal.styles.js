import styled from 'styled-components'

export const ModalWrapper = styled.div`
display:grid;
place-items:center;
overflow-y:aut;
overflow-x:hidden;
position:fixed;
outline:none;
z-index:50;
height:80%;
`
export const ModalCard = styled.div`
position:relative;
width:auto;
margin:1.5rem auto;


`

export const Input = styled.input`
padding:.75rem;
position:relative;
border-radius:10px;
font-size: 0.875rem; 
line-height: 1.25rem;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
outline:none;
width:80%;
display:block;
margin:1rem auto;
width:100%;
&:focus{
   outline:none;
}
`
export const Select = styled.select`
padding:.75rem;
position:relative;
border-radius:10px;
font-size: 0.875rem; 
line-height: 1.25rem;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
outline:none;
width:80%;
display:block;
margin:1rem auto;

&:focus{
   outline:none;
}
`

export const Form = styled.form`
display:grid:
grid-template-columns:repeat(12,1fr);
padding:1.5em;
text-align:center

`
export const Label = styled.label`
grid-columns:span 12;
font-weight:500;

`