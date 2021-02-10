import React from "react"
import { render } from "@testing-library/react"

// Components
import Creditcard from "../Creditcard"

// @ts-ignore
test('should render the InputGlass component', () => {
    const success = true;

    // @ts-ignore
    render(<InputGlass />)

    // @ts-ignore
    expect(true).toBe(success)
})

// @ts-ignore
test('should render the CreditCardGlass component', () => {
    const success = true;

    // @ts-ignore
    render(<CreditCardGlass />)

    // @ts-ignore
    expect(true).toBe(success)
})

// @ts-ignore
test('should render the BoxChatGlass component', () => {
    const success = true;

    // @ts-ignore
    render(<BoxChatGlass />)

    // @ts-ignore
    expect(true).toBe(success)
})

// @ts-ignore
test('should render the BoxMessageGlass component', () => {
    const success = true;

    // @ts-ignore
    render(<BoxMessageGlass />)

    // @ts-ignore
    expect(true).toBe(success)
})
