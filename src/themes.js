import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans serif;
}

body{
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    font-weight: ${props => props.theme.fwLight};
    transition: all .5s ease;
}
`

export const lightTheme ={
    color: 'hsl(200, 15%, 8%)',
    backgroundColor: 'hsl(0, 0%, 98%)',
    colorsUiBase: 'hsl(0, 0%, 100%)',
    shadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    fsSm: '14px',
    fsMd: '16px',
    fwLight: '300',
    fwNormal: '600',
    fwBold: '800',
    radii: '0.5rem',
}

export const darkTheme = {
    color: 'hsl(0, 0%, 100%)',
    backgroundColor: 'hsl(207,26%, 17%)',
    colorsUiBase: 'hsl(209, 23%, 22%)',
    shadow: 'rgba(245, 245, 245, 0.2) 0px 0px 8px',
    fsSm: '14px',
    fsMd: '16px',
    fwLight: '300',
    fwNormal: '600',
    fwBold: '800',
    radii: '0.5rem',
}
