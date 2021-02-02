import React from 'react';

// Components
import CreditCard from "./CreditCard"
import InputGlass from "./InputGlass"

// Styles
import "./styles/global.css"

function App() {
    return (
        <>
            <CreditCard
                cardWidth={250}
                cardHeight={150}
                cardRadius={6}
                cardBackground="#f3f2f108"
                cardGlass={10}
                cardColorBorder=""

                cardTitle="Nubank"
                cardNumber={6689254722651258}
                cardNamePersonal="Pedro Guilherme"
                cardDateValid="08/35"
            />
            <InputGlass
                cardWidth={330}
                cardHeight={60}
                cardRadius={6}
                cardBackground="#f3f2f108"
                cardGlass={10}
                cardColorBorder=""

                inputPlaceholder="your email"
                inputPlaceholderColor="#f3f2f145"
                buttonName="apply"
                type="email"

            >
            </InputGlass>
        </>

    );
}

export default App;
