import classes from './Button.module.css'

export default function Button({children, isActive, ...props}) {

    return (

        <button className={`${classes.button} ${isActive ? `${classes.active}` : ''}`}
              {...props}> {children} </button>
    )
}