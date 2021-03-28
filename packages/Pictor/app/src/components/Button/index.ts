import styled from "styled-components"

// Types
import { IButton } from "./types"

export const Button = styled.div<IButton>`
    width: auto;
    height: ${props => props.buttonHeight && Number(props.buttonHeight) > 0 ? `${props.buttonHeight}px` : '30px'};

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    button {
        width: ${props => props.buttonWidth && Number(props.buttonWidth) > 0 ? `${props.buttonWidth}px` : '150px'};
        height: 100%;
        /* border: 1px solid red; */
        border-radius: 25px;
        background-color: var(--nineth-background);

        font-family: var(--font-general), sans-serif;
        font-size: var(--font-title-button-min-size);
        font-weight: 700;
        color: var(--text-description-greywhite);
        cursor: pointer;
    }
`
