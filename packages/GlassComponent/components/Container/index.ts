import styled from "styled-components"

// Types
import { CardContainer } from "../../types"

export default styled.div<CardContainer>`
    width: ${props => props.cardWidth && props.cardWidth > 0 ? `${props.cardWidth}px` : '300px'};
    height: ${props => props.cardHeight && props.cardHeight > 0 ? `${props.cardHeight}px` : '150px'};
    border-radius: ${props => props.cardRadius && props.cardRadius > 0 ? `${props.cardRadius}px` : '15px'};
    border: 1px solid ${props => props.cardColorBorder && props.cardColorBorder !== '' ? props.cardColorBorder : '#f3f2f145'};
    background-color: ${props => props.cardBackground && props.cardBackground.trim() !== '' ? props.cardBackground : '#f3f2f108'};
    backdrop-filter: ${props => props.cardGlass && props.cardGlass > 0 ? `blur(${props.cardGlass}px)` : 'blur(5px)'};
    z-index: 100;
    padding: 10px 20px 10px 20px;

    display: grid;
    grid-template-columns: repeat(2, 80% 20%) ;
`
