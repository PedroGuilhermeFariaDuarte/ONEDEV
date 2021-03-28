import React from 'react';

// Global Style
import GlobalStyle from "./styles/global"
import ResponseStyle from "./styles/responsive"
import "./styles/guide/index.css"

// Router
import Router from "./routers"

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
            <ResponseStyle />
        </>
    );
}

export default App;
