import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    /* border: 1px solid red; */

    display: flex;
    flex-flow: column;
`

export const ContainerHeader = styled.header`
    width: 100%;
    height: 65px;
    border-bottom: 1px solid var(--border-greyice);
    margin-bottom: 30px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    div#wrapper_header_icon {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background-color: var(--icon-container-selected);

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        svg {
            font-size: var(--font-svg-size);
            color: var(--icon-status-selected);
        }
        cursor: pointer;
    }

    span#wrapper_header_title {
        font-family: var(--font-general);
        font-weight: 700;
        font-size: var(--font-title-size);
        color: var(--text-label-blackmidnight);
        margin-left: 10px;
    }
`

export const ContainerSearch = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background-color: var(--secondary-backgorubd);
    padding: 2px 10px 2px 10px;
    margin-bottom: 30px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    input {
        flex:1;
        height:100%;
        background:none;
    }

    svg {
        font-size: var(--font-svg-size);
        color: var(--eighth-background);
    }
`

export const ContainerInformation = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    span#container_information_title {
        font-family: var(--font-general);
        font-weight: 700;
        font-size: var(--font-description-size);
        color: var(--text-label-blackmidnight);
    }

    svg {
        font-size: var(--font-svg-size);
        color: var(--eighth-background);
    }
`

export const ContainerContact = styled.div`
    width: 100%;
    height: 100%;
    overflow:hidden;
    overflow-y: auto;
    /* border:1px solid red; */
    padding: 2px;

    ::-webkit-scrollbar-track {
            border:none;
            background:none;
            background-color: none;
        }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        border-radius: 5px;
        background: none;
    }

    ::-webkit-scrollbar-thumb {
        width:3px;
        height:6px;
        border-radius:5px;
        background-color: #EDEBE9;
    }

    display: flex;
    flex-flow: column;
    align-items: center;

    span.glasscomponentss-contact_name {
        color: var(--text-label-blackmidnight);
    }

    span.glasscomponentss-contact_lastMessage{
        color: var(--text-general)
    }
`
