import styled from "styled-components"

export const MyButton = styled.button`
padding: 0 1rem;
background-color: ${props => props.theme.colorsUiBase};
box-shadow: ${props => props.theme.shadow};
line-height: 2.5;
border-radius:${props => props.theme.radii};
margin-bottom: 1rem;

border: none;
display: flex;
align-items: center;
gap: 0.75rem;

color: ${props => props.theme.color};
cursor: pointer;
transition: all .5s ease;
`

