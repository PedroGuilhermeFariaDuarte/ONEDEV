import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: auto;
    /* border: 1px solid blue; */
    position: relative;
    margin-top: 20px;
`

export const ContainerMapBox = styled.div.attrs({
    id: "map-box-container"
})`
    width: 100%;
    height: 267px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    & svg#point-clicked {

    }
`;

export const ContainerMapBoxController = styled.div`
    width: 70px;
    height: auto;
    padding: 5px;
    position: absolute;
    top: 20px;
    left: 0px;
    z-index:100;

    display: flex;
    flex-flow: column;
    justify-content: center;
`

export const ContainerActionMapBox = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    backdrop-filter: blur(2px);
    background-color: var(--nineth-background-glass);
    cursor: pointer;
    transition: 0.3s cubic-bezier(0, 0.31, 0.33, 1.11);

    & ~ & {
        margin-top: 10px;
    }

    &:hover {
        transform: scale(1.1);
        transition: 0.4s cubic-bezier(0, 0.31, 0.33, 1.11);
    }

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    svg {
        font-size: var(--font-svg-size-min);
        color: var(--icon-status-general);
    }
`
