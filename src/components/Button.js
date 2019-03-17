import React from 'react';

const Button = ({
    onClick,
    children,
    isSmall,
    isDisabled
}) => (
        <div>
            <button className={`button ${isSmall ? 'button--is-small' : ''}`} onClick={onClick} disabled={isDisabled}>{children}</button>
        </div>
    );

export default Button;