import styled, { css } from "styled-components"
import { Form } from "@unform/web";

// Types
import { IContainerFollowItem } from "./types"

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

export const ContentAbout = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    overflow-y: auto;

    display: flex;
    flex-flow: row wrap;
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
