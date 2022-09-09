import React from "react";
import classes from './inputs.module.css';

const Input1 = ({...props}) => {
    return (
        <input {...props} type="text" className={classes.size1}/>
    )
}

export default Input1;