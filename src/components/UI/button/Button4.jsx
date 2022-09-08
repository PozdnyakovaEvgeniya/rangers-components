import React from 'react';
import classes from './button.module.css';

const Button4 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button1 + ' ' + classes.size4}>
            {children}
        </button>
    )
}

export default Button4;