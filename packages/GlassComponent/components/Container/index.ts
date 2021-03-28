import styled, { css } from "styled-components"

// Types
import { CardContainer } from "../../types"

export const InputMessageContainer = styled.div<CardContainer>`
    width: ${props => props.cardWidth && props.cardWidth > 0 ? `${props.cardWidth}px` : '300px'};
    height: 50px auto;

    border-radius: ${props => props.cardRadius && props.cardRadius > 0 ? `${props.cardRadius}px` : '15px'};
    border: 1px solid ${props => props.cardColorBorder && props.cardColorBorder !== '' ? props.cardColorBorder : '#f3f2f145'};
    background-color: ${props => props.cardBackground && props.cardBackground.trim() !== '' ? props.cardBackground : '#f3f2f108'};
    backdrop-filter: ${props => props.cardGlass && props.cardGlass > 0 ? `blur(${props.cardGlass}px)` : 'blur(5px)'};
    z-index: 100;
    position: relative;

    ${props => props.cardPaddingAll && props.cardPaddingAll >= 0
        ?
        css`
            padding: ${props.cardPaddingAll}px;
        `
        :
        props.cardPaddingLeft &&
            props.cardPaddingRight &&
            props.cardPaddingTop &&
            props.cardPaddingBottom ?
            css`
            padding: ${props.cardPaddingTop}px ${props.cardPaddingLeft}px ${props.cardPaddingBottom}px ${props.cardPaddingRight}px
            `
            :
            css`
                padding: 10px 20px 10px 20px;
            `
    }

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    svg {
        cursor: pointer;
        margin-right: 4px;
    }
`
export const ContactContainer = styled.div<CardContainer>`
    width: ${props => props.cardWidth && props.cardWidth > 0 ? `${props.cardWidth}px` : '300px'};
    height: ${props => props.cardHeight && props.cardHeight > 0 ? `${props.cardHeight}px` : '90px'};

    border-radius: ${props => props.cardRadius && props.cardRadius > 0 ? `${props.cardRadius}px` : '15px'};
    border: 1px solid ${props => props.cardColorBorder && props.cardColorBorder !== '' ? props.cardColorBorder : '#f3f2f145'};
    background-color: ${props => props.cardBackground && props.cardBackground.trim() !== '' ? props.cardBackground : '#f3f2f108'};
    backdrop-filter: ${props => props.cardGlass && props.cardGlass > 0 ? `blur(${props.cardGlass}px)` : 'blur(5px)'};
    z-index: 100;
    position: relative;
    margin-bottom: 30px;

    ${props => props.cardPaddingAll && props.cardPaddingAll >= 0
        ?
        css`
            padding: ${props.cardPaddingAll}px;
        `
        :
        props.cardPaddingLeft &&
            props.cardPaddingRight &&
            props.cardPaddingTop &&
            props.cardPaddingBottom ?
            css`
            padding: ${props.cardPaddingTop}px ${props.cardPaddingLeft}px ${props.cardPaddingBottom}px ${props.cardPaddingRight}px
            `
            :
            css`
                padding: 10px 20px 10px 20px;
            `
    }

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

export default styled.div<CardContainer>`
    width: ${props => props.cardWidth && props.cardWidth > 0 ? `${props.cardWidth}px` : '300px'};
    min-height: ${props => props.cardHeight && props.cardHeight > 0 ? `${props.cardHeight}px` : '150px'};
    height: auto;
    border-radius: ${props => props.cardRadius && props.cardRadius > 0 ? `${props.cardRadius}px` : '15px'};
    border: 1px solid ${props => props.cardColorBorder && props.cardColorBorder !== '' ? props.cardColorBorder : '#f3f2f145'};
    background-color: ${props => props.cardBackground && props.cardBackground.trim() !== '' ? props.cardBackground : '#f3f2f108'};
    backdrop-filter: ${props => props.cardGlass && props.cardGlass > 0 ? `blur(${props.cardGlass}px)` : 'blur(5px)'};
    z-index: 100;
    ${props => props.cardPaddingAll && props.cardPaddingAll >= 0
        ?
        css`
            padding: ${props.cardPaddingAll}px;
        `
        :
        props.cardPaddingLeft &&
            props.cardPaddingRight &&
            props.cardPaddingTop &&
            props.cardPaddingBottom ?
            css`
            padding: ${props.cardPaddingTop}px ${props.cardPaddingLeft}px ${props.cardPaddingBottom}px ${props.cardPaddingRight}px
            `
            :
            css`
                padding: 10px 20px 10px 20px;
            `
    }
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(2, 80% 20%);
`
