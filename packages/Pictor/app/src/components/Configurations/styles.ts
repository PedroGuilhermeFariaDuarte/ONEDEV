import styled, { css } from "styled-components"
import { Form } from "@unform/web";

// Types
import { IContainerFollowItem, IContainerImageChatting } from "./types"

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
    min-height: 70px;
    height: auto;
    padding: 10px 10px 10px 20px;
    border-bottom:1px solid var(--border-greyice);
    display: flex;
    flex-flow: column;
    justify-content: center;

    span#about_header {
        font-family: var(--font-general);
        font-size: var(--font-title-size);
        color: var(--text-label-blackmidnight);
    }
`

export const ContainerFollowsNavigation = styled.nav`
    width: 100%;
    height: 30px;
    padding-top: 20px;
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export const ContainerFollowsItems = styled.div<IContainerFollowItem>`
        width: 150px;
        height: auto;
        cursor: pointer;

        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        span.item-follows-navigation {
            width: auto;
            height: 30px;
            position: relative;

            display: flex;
            flex-flow: row nowrap;
            align-items: center;

            font-family: var(--font-general);
            font-size: var(--font-description-size);
            color: var(--text-label-blackmidnight);

            &.item-follows-focus::after {
                content: "";
                width: 100%;
                height: 0px;
                position: absolute;
                bottom: 0px;
                background: none;
                transition: 0.4s cubic-bezier(0, 0.31, 0.33, 1.11);
            }

            ${props =>
        (props.itemInFocus && props.itemInFocus === true) &&
        css`
            &.item-follows-focus {
                color: var(--text-description-greenmorning);
            }

            &.item-follows-focus::after {
                content: "";
                position: absolute;
                bottom: 0px;
                width: 100%;
                height: 3px;
                background-color: var(--icon-container-selected-dark);
                transition: 0.5s cubic-bezier(0, 0.31, 0.33, 1.11);
            }
        `
    }
        }
`

export const ContainerSearchFollows = styled(Form)`
    width:  300px;
    height: 30px;
    border-radius: 10px;
    border:1px solid var(--border-greyice);
    background-color: var(--primary-background);
    padding-left: 5px;
    position: absolute;
    margin-bottom: 15px;
    right: 0px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    svg {
        font-size: var(--font-svg-size);
        color: var(--icon-status-selected);
    }

    input {
        border: none;
        background: none;
        outline: none;
    }
`

export const ContainerBox = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    overflow-y: auto;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`

export const ContainerMyFollows = styled.div`
    width: 240px;
    height: 20px auto;
    margin: 10px;

    & .my-follows-card {
        width: 100%;
        margin: 0px;
    }
`

export const ContentBox = styled.div`
    width: 50%;
    height: 300px;
    border:1px solid var(--border-greyice);
    padding: 10px;
    border-radius: 10px;
    background-color: var(--primary-background);
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;



    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    span.title-config  {
        font-family: var(--font-general);
        font-size: var(--font-description-size);
        color: var(--text-label-blackmidnight);
    }

    &.content-map-box {
        width: 47%;
        overflow-y: auto;
        /* justify-content: space-between; */
        margin: 0px;
    }
`

export const ContainerInputMyLocation = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    align-self: flex-start;
    margin-bottom: 20px;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    div.mylocationTitle {
        width: auto;
        height: auto;

        span {
            font-family: var(--font-general);
            font-size: var(--font-description-size);
            color: var(--text-label-blackmidnight);
        }
    }

    div.labelinput {
        width:100%;
        min-height: 20px;
        height: auto;
        border-radius: 10px;
        background-color: var(--secondary-backgorubd);
        position: relative;
        overflow: hidden;

        .distance-select {
            width: 100%;
            height: 100%;
            background: none;
            outline: none;
            border: none;
            padding: 10px;
        }
    }

`

export const ContainerForm = styled(Form)`
    width: 100%;
    height: 100%;
    /* border:1px solid red; */
    padding-top: 10px;

    display: flex;
    flex-flow: column;

    & .input-personal {
        border: 1px solid var(--border-greyice)
    }
`

export const ContentPersonalGeneral = styled.div`
    width: 100%;
    height: 100%;
    /* border:1px solid red; */
    padding-top: 10px;

    display: flex;
    flex-flow: column;

    & .input-personal {
        border: 1px solid var(--border-greyice)
    }
`

export const ContainerLocation = styled.div`
    width: 325px;
    height: auto;
    /* border: 1px solid red; */
    margin-top: 20px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    span.describe-option {
        font-family: var(--font-general);
        font-size: var(--font-description-size);
        color: var(--text-label-blackmidnight);

        margin-left: 10px;
    }
`
export const ContainerLocationMap = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid red;
    margin-top: 30px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

`;

export const BoxHeader = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;
`

export const ContainerChattingCover = styled.div`
    width: 100%;
    min-height: 50px;
    height: auto;

    display: flex;
    flex-flow: column;

    & span.describe-section {
        font-family: var(--font-general);
        font-size: var(--font-description-size);
        color: var(--text-description-bluegray);
        margin-top:20px;
        margin-bottom: 15px;
        cursor: default;
        user-select: none;
    }
`

export const ContainerOptionsSection = styled.div`
    width: 100%;
    height: 150px;
    border-radius: 10px;
    border: 1px solid var(--border-greyice);
    padding: 10px;
    overflow-y: auto;

    display: flex;
    flex-flow: row wrap;
`

export const ContainerGeneralChatting = styled.div<IContainerImageChatting>`
    width: 80px;
    height: 75px;

    border-radius: 10px;
    border: 1px solid var(--border-greyice);
    background-color: ${props =>
        props.backgroundColor &&
            props.backgroundColor.trim() !== ""
            ?
            props.backgroundColor
            :
            'var(--secondary-backgorubd)'
    };
    background-image: url(
        ${props =>
        props.backgroundImage &&
            props.backgroundImage.trim() !== ""
            ?
            props.backgroundImage
            :
            ''
    }
    );
    background-size: cover;
    overflow:hidden;
    margin-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`

