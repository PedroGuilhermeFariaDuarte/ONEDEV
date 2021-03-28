import styled from "styled-components"


export const Container = styled.div.attrs({
    id: "wrapper-navigation-container"
})`
    width: 25%;
    height: 100%;
    border-left: 1px solid var(--border-greyice);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: var(--primary-background);
    padding: 5px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`
