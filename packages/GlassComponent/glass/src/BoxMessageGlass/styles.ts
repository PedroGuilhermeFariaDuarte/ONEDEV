import styled from "styled-components"

// Types
import { StyledButton } from "../types"

export const Section = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-flow: column;
`

export const BoxContainer = styled.div`
    width: 100%;
    height: 100%;
    /* border:1px solid red; */

    display: flex;
    flex-flow: column;
`

export const BoxHeader = styled.div`
    width: 100%;
    height: 20px;
    /* border:1px solid blue; */

    span {
        font-family: "'Lato Hairline', Lato",sans-serif;
        font-weight: 700;
        font-size: 0.9em;
        color: #FFF;
        letter-spacing: 0.7px;
    }
`

export const BoxContent = styled.div`
    width: 100%;
    flex: 1;
    /* border:1px solid green; */

     span {
        font-family: "'Lato Hairline', Lato",sans-serif;
        font-weight: lighter;
        font-size: 0.6em;
        color: #FFF;
        letter-spacing: 0.7px;
    }
`

export const Button = styled.button<StyledButton>`
    width: 100%;
    height: 25px;
    background-color: ${props => props.boxMessageButtonColor && props.boxMessageButtonColor !== '' ? props.boxMessageButtonColor : '#4F3AA7'};
    cursor: pointer;
    position: absolute;
    bottom: 0px;
    left: 10px;

    font-family: "'Lato Hairline', Lato",sans-serif;
    font-weight: 600;
    font-size: 0.5em;
    color: ${props => props.boxMessageButtonTextColor && props.boxMessageButtonTextColor !== '' ? props.boxMessageButtonTextColor : '#FFF'};
    letter-spacing: 0.7px;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
`
