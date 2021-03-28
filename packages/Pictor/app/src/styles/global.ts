import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *,*::before,*::after {
        margin: 0px;
        border: none;
        outline: none;
        box-sizing: border-box;

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
    }



    html,body, #root {
        width: 100%;
        height: 100%;
        font-family: var(--font-general), sans-serif;
        font-size: var(--general-size);
        color: var(--text-general);
        background-color: var(--primary-background);
    }


`
