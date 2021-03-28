import React from 'react'

// Styles
import { Container } from "./styles"

// Types
import { IWrapper } from './types'

const Wrapper: React.FC<IWrapper> = ({ children }) => (<Container>
    {children}
</Container>)

export default Wrapper
