import React from 'react';
import classes from './buttons.module.css';

const Button3 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button1 + ' ' + classes.size3}>
            {children}
        </button>
    )
}

export default Button3;