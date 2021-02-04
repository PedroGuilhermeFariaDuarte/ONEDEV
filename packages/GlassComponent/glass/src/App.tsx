import React from 'react';

// Global Components
import Content from "./components/Content"

// Components
import CreditCard from "./CreditCard"
import InputGlass from "./InputGlass"
import BoxMessageGlass from "./BoxMessageGlass"
import BoxChatGlass from "./BoxChatGlass"

// Styles
import "./styles/global.css"

// Assets
import Image from "./assets/object.png"

function App() {
    return (
        <>
            <Content>
                <CreditCard cardWidth={250}
                    cardHeight={150}
                    cardRadius={6}
                    cardBackground="#f3f2f108"
                    cardGlass={10}
                    cardColorBorder=""
                    cardPaddingAll={0}
                    cardPaddingLeft={0}
                    cardPaddingRight={0}
                    cardPaddingTop={0}
                    cardPaddingBottom={0}

                    cardTitle="Nubank"
                    cardNumber={6689254722651258}
                    cardNamePersonal="Pedro Guilherme"
                    cardDateValid="08/35"
                />
                <InputGlass cardWidth={330}
                    cardHeight={60}
                    cardRadius={6}
                    cardBackground="#f3f2f108"
                    cardGlass={10}
                    cardColorBorder=""
                    cardPaddingAll={0}
                    cardPaddingLeft={0}
                    cardPaddingRight={0}
                    cardPaddingTop={0}
                    cardPaddingBottom={0}

                    inputPlaceholder="your email"
                    inputPlaceholderColor="#f3f2f145"
                    buttonName="apply"
                >
                </InputGlass>
                <BoxMessageGlass cardWidth={350}
                    cardHeight={100}
                    cardRadius={6}
                    cardBackground="#f3f2f108"
                    cardGlass={10}
                    cardColorBorder=""
                    cardPaddingAll={0}
                    cardPaddingLeft={0}
                    cardPaddingRight={0}
                    cardPaddingTop={0}
                    cardPaddingBottom={0}

                    boxMessageTitle="Warning"
                    boxMessageContent="You have a error, try again!"
                    boxMessageButtonColor=""
                    boxMessageButtonText="done"
                    boxMessageButtonTextColor=""
                />
                <BoxChatGlass cardWidth={220}
                    cardHeight={60}
                    cardRadius={6}
                    cardBackground="#f3f2f108"
                    cardGlass={10}
                    cardColorBorder=""
                    cardPaddingAll={5}
                    cardPaddingLeft={0}
                    cardPaddingRight={0}
                    cardPaddingTop={0}
                    cardPaddingBottom={0}

                    boxChatContent="Hey bro! what are meteors ?"
                    boxChatOnMe={true}
                />

                <img src={Image} className="background" alt="Teste" />
                <img src={Image} className="background" alt="Teste" />
                <img src={Image} className="background" alt="Teste" />
                <img src={Image} className="background" alt="Teste" />
            </Content>
        </>

    );
}

export default App;
