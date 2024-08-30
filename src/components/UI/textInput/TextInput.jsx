import React from "react";
import classes from "./TextInput.module.css"

export default function TextInput({ p, onChange, ...props }, ref)
{
    return (
        <input type="text" placeholder={p} {...props} onChange={e => onChange(e.target.value)} className={classes["text-input"]} />
    )
}