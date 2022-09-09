import React from "react";
import classes from './inputs.module.css';

const Input2 = ({...props}) => {
    return (
        <input {...props} type="text" className={classes.size2}/>
    )
}

export default Input2;