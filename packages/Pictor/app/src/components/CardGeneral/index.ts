import styled from "styled-components"

// Types
import { ICardGeneralImageContainer, IAllProps } from "./types"

export const CardGeneral = styled.div.attrs({
    className: "card-general"
}) <IAllProps>`
    width: 50%;
    min-height: 80px;
    height: auto;
    border: 1px solid var(--border-greyice);
    border-radius: 10px;
    background-color: var(--primary-background);
    margin: 10px;
    margin-bottom: 10px;
    padding: 10px;

    & ~ .card-general {
    }

    display: flex;
    flex-flow: row nowrap;
`

export const CardGeneralImageContainer = styled.div<ICardGeneralImageContainer>`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-color: var(--eleventh-background);
    background-image: url(${props => props.backgroundURL && props.backgroundURL.trim() !== '' ? props.backgroundURL : ''});
    background-size: cover;
    overflow: hidden;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    & img {
        width: 100%;
        height: 100%;
    }

    & svg {
        font-size: var(--font-svg-size);
        color: var(--icon-status-selected);
        cursor: pointer;
    }
`

export const CardGeneralContentContainer = styled.div`
    flex: 1;
    height: 100%;

    display: flex;
    flex-flow: column;
`

export const CardGeneralHeader = styled.div`
    width: 100%;
    height: 30px;
    padding: 10px;
    /* border: 1px solid blue; */

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    span {
        font-family: var(--font-general);
        font-size: var(--font-title-card-size);
        color: var(--text-label-blackmidnight);
    }
`

export const CardGeneralDescription = styled.div`
    flex: 1;
    height: 100%;
    padding-left: 10px;
    /* border:1px solid red; */

    display: flex;
    flex-flow: row;

    span {
        font-family: var(--font-general);
        font-size: var(--font-description-size);
        color: var(--text-description-bluegray);
    }
`
