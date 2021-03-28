import styled from "styled-components"

// Types
import { IHeader, IImageProfile } from "./types"

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 100px 0px 100px;
    overflow-y: auto;

    display: flex;
    flex-flow: column;
`

export const ContainerHeader = styled.header<IHeader>`
    width: 100%;
    height: 300px;
    border-radius: var(--border-all-radius-header);
    border:1px solid var(--border-greyice);
    background-color: var(--seventh-background);
    background-image: url(
        ${props => props.headerBackground && props.headerBackground.trim() !== '' ? props.headerBackground : ''
    }
    );
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;

    display: flex;
    flex-flow: column;
    justify-content: flex-end;
`

export const ContainerUserData = styled.div`
    width: 100%;
    height: 70px;
    padding: 0px 0px 0px 10px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    & #container-image-name {
        width: 200px auto;
        height: auto;
        position: absolute;
        bottom: 20px;
        left: 25px;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;

        span.name_user_profile {
            font-family: var(--font-general);
            font-size: var(--font-title-size);
            color: var(--text-label-greywhite);
            margin-left: 20px;
            margin-top: 50px;
            z-index: 100;
        }
    }
`

export const ContainerImageProfile = styled.div<IImageProfile>`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: 1px soid darkmagenta;
    background-color: var(--primary-background);
    background-image: url(
        ${props => props.imageBackground && props.imageBackground.trim() !== '' ? props.imageBackground : ''
    }
    );
    background-size: cover;
    z-index: 100;
`

export const ContainerEditCover = styled.div`
    width: 70px;
    height: 24px;
    padding: 5px;
    border:1px solid darkolivegreen;
    border-radius: var(--border-all-radius-button-general);
    margin-right: 10px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

export const ContainerUserNavigation = styled.nav`
    width: 100%;
    height: 50px;
    padding: 15px 100px 15px 195px;
    /* border:1px solid darkturquoise; */
    background-color: var(--secondary-backgorund-glass);
    backdrop-filter: blur(5px);

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    span.item-nav {
        font-family: var(--font-general);
        font-size: var(--font-description-size);
        color: var(--text-label-blackmidnight);
        margin-left: 10px;
        z-index: 1000;
        cursor: pointer;
    }

    span.item-nav-focus {
        color: var(--text-description-greenmorning);
    }
`

export const ContainerAbout = styled.section`
    width: 100%;
    min-height: 300px;
    height: auto;
    border-radius: var(--border-all-radius-button-general);
    border:1px solid var(--border-greyice);
    background-color: var(--seventh-background);
    margin-bottom: 50px;

    display: flex;
    flex-flow: column;
`

export const AboutHeader = styled.header`
    width: 100%;
    height: 70px;
    padding: 10px 10px 10px 20px;
    border-bottom:1px solid var(--border-greyice);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    span#about_header {
        font-family: var(--font-general);
        font-size: var(--font-title-size);
        color: var(--text-label-blackmidnight);
    }
`

export const ContentAbout = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    overflow-y: auto;

    display: flex;
    flex-flow: row;
`
