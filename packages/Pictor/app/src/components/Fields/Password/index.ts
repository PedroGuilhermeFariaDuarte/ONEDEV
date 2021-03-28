import styled from "styled-components"

export const Password = styled.div`
    width: 100%;
    height: auto;
    border-radius: 50px;
    background-color: var(--primary-background);
    padding: 10px;
    margin-bottom: 20px;
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    span {
        font-family: var(--font-general), sans-serif;
        font-size: var(--font-description-size);
        color: var(--text-description-blackmidnight);
        position: absolute;
        top: -20px;
    }

    input {
        width: 100%;
        height: 30px;
        border: none;
        background: none;
        padding: 5px;

        font-family: var(--font-general), sans-serif;
        font-size: var(--font-description-size);
        color: var(--text-description-blackmidnight);

        &::placeholder {
            font-size: var(--font-text-placeholder-size);
            color: var(--text-description-blackmidnight);
        }
    }

    svg {
        font-size: var(--font-svg-size);
        color: var(--icon-status-general);

        & > input:focus {

        }
    }
`
