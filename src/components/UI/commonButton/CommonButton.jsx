import classes from "./CommonButton.module.css"

export default function CommonButton({ children, ...props })
{
    return (
        <button {...props} className={classes["common-button"]}>
            {children}
        </button>
    )
}