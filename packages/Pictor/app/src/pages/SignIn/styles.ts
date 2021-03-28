import styled from "styled-components"
import { Form } from "@unform/web";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--secondary-backgorubd);
    position: relative;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`
export const ContainerTitle = styled.div`
    width: auto;
    height: auto;
    margin-bottom: 105px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    font-family: var(--font-general), sans-serif;
    font-size: var(--general-size);
    color: var(--text-description-blackmidnight);

    cursor: default;
    user-select: none;

    span {
        font-size: var(--font-description-size);
        font-weight: lighter;
    }

    h1 {
        font-size: var(--font-title-logo-size);
        font-weight: 700;
        margin-top:-12px;
    }
`
export const Content = styled.div`
    width: 400px;
    height: 100px auto;
    position: relative;
    /* border:1px solid red; */

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`
export const ContainerActions = styled.div`
    width: 100%;
    height: auto;
    /* border:1px solid red; */
    position: relative;
    margin-top: 100px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    span {
        font-family: var(--font-general), sans-serif;
        font-size: var(--font-description-size);
        font-weight: lighter;
        color: var(--text-label-blackmidnight);
        cursor: default;
        user-select: none;
    }

`
export const ContainerButtons = styled.div`
    width: auto;
    height: 30px;
    /* border:1px solid blue; */

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    button {
        width: 150px;
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
export const ContainerWarning = styled.div`
    width: 100%;
    height: auto;
    /* border:1px solid blue; */
    position: absolute;
    bottom: 15px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    p {
        font-family: var(--font-general), sans-serif;
        font-size: var(--font-description-size);
        font-weight: lighter;
        color: var(--text-last-message-greywhite);
        cursor: default;
        user-select: none;
    }
`
export const FormContainer = styled(Form)`
    width: 100%;
    height: auto;
`
export const ContainerInput = styled.div`
    width: 100%;
    height: auto;
    border-radius: 50px;
    background-color: var(--primary-background);
    padding: 10px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    input {
        width: 100%;
        height: 30px;
        border: none;
        background: none;
        padding: 5px;

        font-family: var(--font-general), sans-serif;
        font-size: var(--font-description-size);
        color: var(--text-description-blackmidnight);

        &::placeholder {
            font-size: var(--font-text-placeholder-size);
            color: var(--text-description-blackmidnight);
        }
    }

    svg {
        font-size: var(--font-svg-size);
        color: var(--icon-status-general);
    }
`
