import styled from "styled-components"

export const Container = styled.div.attrs({
    id: "subNavigation-container"
})`
    width: 100%;
    height: 100%;
    padding: 10px;
    /* border: 1px solid red; */
    position: relative;

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

    button#call_others_user {
        width: 25px;
        height: 25px;
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

    svg {
        font-size: var(--font-svg-size);
        color: var(--eighth-background);
    }
`

export const ContainerContact = styled.div.attrs({
    id: "container-contact"
})`
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    /* border:1px solid red; */
    padding: 2px 20px 2px 20px;

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
`

export const ContainerChatLocations = styled.div.attrs({
    id: "chat_locations"
})`
    width: 400px;
    height: 400px;
    border-radius: 10px;
    border: 1px solid var(--border-greyice);
    background-color: var(--primary-background);
    position: absolute;
    left: -510px;
    z-index: 1000;
    transition: 0.5s cubic-bezier(0, 0.31, 0.33, 1.11);
    padding: 10px;

    display: flex;
    flex-flow: column ;
    align-items: center;

    &.show_chat_locations {
        left: 100%;
        transition: 0.7s cubic-bezier(0, 0.31, 0.33, 1.11);
    }

    & .container-contact-location {
        flex-flow: row wrap ;
        justify-content: flex-start;
        align-items: flex-start;
    }
`
export const Chatlocation = styled.div.attrs({
    className: "chat-location"
})`
    width: 100px;
    height: 90px;
    border-radius: 15px;
    background-color: var(--secondary-backgorubd);
    cursor: pointer;
    margin: 5px;
    overflow: hidden;

    display: flex;
    flex-flow: column ;
    justify-content: center;
    align-items: center;

    span {
        font-size: var(--font-svg-size);
    }

    span.name_chat {
        font-size: var(--font-description-chat-name-size);
        color: var(--eighth-background);
    }

    span.location_chat {
        font-size: var(--font-description-chat-location-size);
        color: var(--text-description-greenmorning);
    }

    &.choose_chat {
        background-color: var(--eleventh-background);

        span {
            color: var(--text-description-greenmorning);
        }
    }
`

