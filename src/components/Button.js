import React from 'react';

const Button = ({
    onClick,
    children,
    isSmall
}) => (
        <div>
            <button className={`button ${isSmall ? 'button--is-small' : ''}`} onClick={onClick}>{children}</button>
        </div>
    );

export default Button;