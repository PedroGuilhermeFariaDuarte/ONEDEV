import styled, { css } from "styled-components"

// types
import { IStyledItemContainer, IStyledContainerItem } from "./types"

export const Container = styled.nav.attrs({
    id: "nav_navigation"
})`
    width: 7%;
    height: 100%;
    /* border: 1px solid blue; */
    /* background-color: var(--secondary-backgorubd); */
    position: relative;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

export const ContainerItem = styled.div.attrs({
    id: "containerItem"
}) <IStyledContainerItem>`
    width: 100%;
    height:  40px;

    &::after {
            content: "";
            width: 0px;
            height: 40px;
            border-radius: 10px;
            position: absolute;
            right: 0px;
            background:none;
            transition: 0.3s cubic-bezier(0, 0.31, 0.33, 1.11);

    }

    &.icon_profile {
        position: absolute;
        bottom: 0px;
    }

    ${props => props.containerItemSelected === true && css`
        &::after {
            content: "";
            width: 4px;
            height: 40px;
            border-radius: 10px;
            position: absolute;
            right: 0px;
            background-color: var(--icon-container-selected);
            transition: 0.3s cubic-bezier(0, 0.31, 0.33, 1.11);
        }
        `
    }
    padding: 5px;
    margin-bottom: 15px;
    cursor: pointer;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const ItemContainer = styled.div<IStyledItemContainer>`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${props => props.itemBackgroundColor && props.itemBackgroundColor.trim() !== "" ? props.itemBackgroundColor : 'var(--icon-container-general)'};

    & svg {
        font-size: var(--font-svg-size);
        color: ${props => props.itemSvgColor && props.itemSvgColor.trim() !== "" ? props.itemSvgColor : 'var(--icon-status-away)'};
        margin: 0px;
    };

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
`

