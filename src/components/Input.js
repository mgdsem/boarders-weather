import React from 'react';

const Input = ({
    labelText,
    type,
    id,
    value,
    placeholder,
    onChange
}) => (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input
                className="input"
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )

export default Input;