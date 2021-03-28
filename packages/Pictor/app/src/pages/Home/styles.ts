import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(190deg,var(--tenth-background), var(--nineth-background));
    position: relative;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    width: auto;
    height: auto;
    position: relative;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

export const ContainerLogo = styled.div`
    width: 100px auto;
    height: 100px auto;
    /* border:1px solid red; */
    margin-bottom: 15px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    svg {
        width: 50px;
        height: 50px;
        color: var(--icon-container-general);
    }
    cursor: default;
    user-select: none;
`

export const ContainerTitle = styled.div`
    width: 100%;
    height: 100%;

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
        color: var(--text-label-greywhite);
    }

    h1 {
        font-size: var(--font-title-logo-size);
        font-weight: 700;
        color: var(--text-title-greywhite);
        margin-top:-12px;
    }
`
export const ContainerButtons = styled.div`
    width: 300px;
    height: 50px;
    /* border:1px solid blue; */
    position: absolute;
    top: 180px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    button {
        width:100%;
        height: 100%;
        /* border: 1px solid red; */
        border-radius: 25px;
        background-color: var(--seventh-background);

        font-family: var(--font-general), sans-serif;
        font-size: var(--font-title-button-size);
        font-weight: 700;
        color: var(--text-description-greenmorning);
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
