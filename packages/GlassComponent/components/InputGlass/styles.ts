import styled from "styled-components"

// Types
import { StyledButton, StyledInput } from "../../types"

export const Section = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;
`

export const Input = styled.input<StyledInput>`
    width:98%;
    height: 100%;
    background: none;

    font-family: "'Lato Hairline', Lato",sans-serif;
    font-weight: lighter;
    font-size: 0.8em;
    color: #FFF;
    letter-spacing: 0.7px;

    &::placeholder {
        font-family: "'Lato Hairline', Lato",sans-serif;
        font-weight: bold;
        font-size: 0.8em;
        color: ${props => props.inputPlaceholderColor && props.inputPlaceholderColor !== '' ? props.inputPlaceholderColor : '#FFF'};
        letter-spacing: 0.7px;
    }
`

export const Button = styled.button<StyledButton>`
    width:100%;
    height: 100%;
    background-color: ${props => props.buttonColor && props.buttonColor !== '' ? props.buttonColor : '#4F3AA7'};
    cursor: pointer;

    font-family: "'Lato Hairline', Lato",sans-serif;
    font-weight:600;
    font-size: 0.8em;
    color: #FFF;
    letter-spacing: 0.7px;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
`
