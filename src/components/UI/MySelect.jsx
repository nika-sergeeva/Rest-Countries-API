import Select from 'react-select'
import styled from 'styled-components'

  
export const MySelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            padding: '0.25rem',
            border: 'none',
            height: '50px',
        }),
        option: (provided, state)=> ({
             ...provided,
            cursor: 'pointer',
            borderColor: 'transparent',
            backgroundColor: state.selected && 'transparent',
        }),
    },
    placeholder: "Filter by Region",
})`
 .css-m7pwy7-control{
    background-color: ${props => props.theme.colorsUiBase};
    box-shadow: none;
}
.css-1pnd7zx-control{
    color: ${props => props.theme.color} ;
    background-color: ${props => props.theme.colorsUiBase} ;
}
.css-b62m3t-container{
    border-radius: ${props => props.theme.radii} !important;
}
    
width: 200px;
order: none;
color: ${props => props.theme.color} ;
box-shadow: ${props => props.theme.shadow} ;
background-color: ${props => props.theme.colorsUiBase};

& > *{
    box-shadow: ${props => props.theme.shadow};
    background-color: ${props => props.theme.colorsUiBase};
    border-radius: ${props => props.theme.radii} !important;
    font-family: 'Nunito Sans', sans serif ;
}

& input{
    padding-left: 0.25rem;
}

& *{
    color: ${props => props.theme.color} !important;
}

& > div[id]{
    background-color: ${props => props.theme.colorsUiBase};
}
`