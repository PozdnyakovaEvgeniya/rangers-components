import React from "react";
import classes from './inputs.module.css';

const Input3 = ({...props}) => {
    return (
        <input {...props} type="text" className={classes.size3}/>
    )
}

export default Input3;