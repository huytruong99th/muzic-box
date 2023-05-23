import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--glow', '.btn--glow--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--small'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    path,
    target,
    rel
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={path} className='btn-mobile' target={target} rel={rel}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} > 
                {children}
            </button>
        </Link>
    )
};