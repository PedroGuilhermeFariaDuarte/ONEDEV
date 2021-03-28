import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @media screen and (min-width: 300px) and (max-width: 1020px) {
        #wrapper {
            flex-flow: column;
            justify-content: flex-start;
            overflow-x: hidden;
            overflow-y: auto;
        }

        #nav_navigation {
            width: 100%;
            height: auto;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            /* border:1px solid red; */
            margin-bottom: 15px;
            border-bottom: 1px solid var(--border-greyice);

            & #containerItem {
                width: 60px;
                height: 60px;
                margin: 0px;
                margin-left: 5px;
                /* border:1px solid blue; */
            }
        }

        #wrapper-navigation-container {
            width: 100%;
            height: 55%;
            border: 1px solid var(--border-greyice);
            border-radius: 10px;
            margin-bottom: 20px;

            #subNavigation-container {

            }
        }

        #chatting-container {
            height: 550px;

            #container-input-message {
                width: 100%;
                padding: 10px;
            /* border:1px solid red; */

                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;

                input {
                    width: 100%;
                }
            }
        }
    }

    // Small Device
    @media screen and (min-width: 300px) and (max-width: 450px) {
        #chat_locations {
            width: 370px;
            left: -370px;

            #container-contact {
                padding: 0px;

                display: flex;
                flex-flow: row ;
                justify-content: flex-start;
                align-items: flex-start;
            }

            &.show_chat_locations {
                left: 10px;
            }

            .chat-location{

            }
        }
    }

    // Surfucae Duo
    @media screen and (min-width: 540px) and (max-width: 650px) {
        #chat_locations {
            width: 470px;
            left: -470px;

            #container-contact {
                padding: 0px;

                display: flex;
                flex-flow: row ;
                justify-content: flex-start;
                align-items: flex-start;
            }

            &.show_chat_locations {
                left: calc((470px / 270));
                //margin-left: calc(470px / 2);
                vertical-align: middle;
            }

            .chat-location{

            }
        }
    }

    /* // Large Device
    @media screen and (min-width: 1020px) {
            #container-contact {
                padding: 0px 15px 0px 10px;

                display: flex;
                flex-flow: row ;
                justify-content: flex-start;
            }
    } */

    // Galaxy S5
    @media screen and (min-width: 360px) and (max-width: 390px) {
        #chat_locations {
            width: 350px;
            left: -350px;

            #container-contact {
                padding: 0px;

                display: flex;
                flex-flow: row ;
                justify-content: flex-start;
                align-items: flex-start;
            }

            &.show_chat_locations {
                left: -12.5px;
            }


`
