import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

// Types
import { IInput } from "./types"

const Input: React.FC<IInput> = ({ name, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [ fieldName, registerField ]);

    return <>
        {
            error && (
                <span>{
                    error
                }</span>
            )
        }
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </>;
}

export default Input
