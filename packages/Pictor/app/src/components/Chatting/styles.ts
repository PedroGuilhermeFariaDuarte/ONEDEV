import styled from "styled-components"

// Types
import {
    IDiv, IContainerMessage,
    IMessageContainer
} from "./types"

export const Container = styled.div.attrs({
    id: "chatting-container"
}) <IContainerMessage>`
    flex: 1;
    height: 100%;
    border-radius: 20px;
    /* border: 1px solid green; */
    position: relative;
    background-color: var(--secondary-backgorubd);
    background-image: url(
        ${props =>
        props.backgroundImage &&
            props.backgroundImage.trim() !== ""
            ?
            props.backgroundImage
            : ''
    }
        );
        background-size: cover;
    padding-bottom: 10px;
    margin-left: 10px;

    display:flex;
    flex-flow: column;
    /* justify-content: center; */
    align-items: center;

    & svg.contact {
        margin-bottom: 10px;
    }
`

export const Header = styled.header`
    width: 100%;
    height: 75px;
    /* border-bottom: 1px solid var(--border-whiteice); */
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 7px;
    background-color: var(--seventh-background-glass);
    backdrop-filter: blur(4px);
    position: absolute;

    display:flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

export const ContactDescription = styled.div`
    width: 300px;
    height: 100%;
    /* border: 1px solid darkcyan; */

    display:flex;
    flex-flow: row nowrap;
    align-items: center;

    #contact_description_image_contact {
        width: 20%;
        height: 100%;
        /* border: 1px solid tan; */
        overflow: hidden;

        display:flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        #image_contact_chat {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: aquamarine;
            background-image:url('');
        }

    }

    #contact_description_contact {
        flex:1;
        height: 100%;
        /* border: 1px solid darkgoldenrod; */

        display:flex;
        flex-flow: row;
        /* justify-content: center; */
        align-items: center;

        & span {
            font-family: var(--font-general);
        }

        span#contact_description_name_contact {
            font-size: var(--font-title-card-size);
            color: var(--text-label-blackmidnight);
        }

        span#contact_description_status_contact {
            width: auto;
            height: auto;
            border-radius: 5px;
            padding: 5px;
            background-color: var(--user-background-status-online);
            margin-left: 10px;
            font-weight: 700;
            font-size: var(--font-description-size);
            color: var(--user-text-status-online);

            cursor: default;
            user-select: none;
        }
    }
`

export const ContainerMessage = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    padding: 75px 10px 10px 10px;
    /* border: 1px solid darkmagenta; */

    ::-webkit-scrollbar-track {
      border:none;
      background:none;
      background-color: none;
      z-index: 100;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 5px;
        padding: 4px;
        background: none;
        z-index: 100;
    }

    ::-webkit-scrollbar-thumb {
        width:5px;
        height:6px;
        border-radius:5px;
        background-color: #EDEBE9;
        z-index: 100;
    }

    display:flex;
    flex-flow: column;
`

export const MessageContainer = styled.div<IMessageContainer>`
    width: 100px auto;
    height: 70px auto;
    border-radius: 10px;
    padding: 10px;
    background-color:  ${props =>
        props.backgroundColor &&
            props.backgroundColor.trim() !== ""
            ?
            props.backgroundColor
            : 'var(--nineth-background);'
    };

    font-family: var(--font-general);
    font-weight: 500;
    font-size: var(--font-description-size);
    color: var(--text-description-bluegray);
    margin-bottom: 20px;
    margin-top: 10px;

    display: flex;
    flex-flow: row wrap;
    align-self: flex-end;

    &.otherchat {
        background-color: var(--seventh-background);
        color: var(--text-description-blackmidnight);
        align-self: flex-start;
    }
`

export const ContainerInputMessage = styled.div.attrs({
    id: "container-input-message"
})`
    width: 50%;
    height: 40px auto;
    /* border:1px solid darkorchid; */
`
