import React from 'react';
import classes from './buttons.module.css';

const Button1 = ({children, ...props}) => {
    return(
        <button {...props} className={classes.button1 + ' ' + classes.size1}>
            {children}
        </button>
    )
}

export default Button1;