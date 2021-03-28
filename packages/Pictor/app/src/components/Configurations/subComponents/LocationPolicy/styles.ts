import styled from "styled-components"

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

export const ContainerButton = styled.div`
    width: 60px;
    height: 25px;
    border-radius: 15px;
    border: 1px solid var(--border-greyice);
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    label {
        width: 25px;
        height: 25px;
        background-color: var(--eleventh-background);
        border-radius: 50%;
        position: absolute;
        transition: 0.3s cubic-bezier(0, 0.31, 0.33, 1.11);
        left: 0px;
        cursor: pointer;
    }

    input {
        display: none;
    }

    input:checked + label {
        background-color: var(--nineth-background);
        left: 33px;
        transition:0.4s cubic-bezier(0, 0.31, 0.33, 1.11);
    }
`
