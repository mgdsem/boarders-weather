import React from 'react';

const Checkbox = ({
    labelText,
    id,
    onChange,
    checked
}) => {
    return (
        <div className="checkbox__wrapper">
            <input className="checkbox__input" type="checkbox" id={id} onChange={onChange} checked={checked} />
            <label htmlFor={id}>{labelText}</label>
        </div>
    )
}

export default Checkbox;