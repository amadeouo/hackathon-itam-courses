import classes from './Badge.module.css'

export const Badge = (props) => {
  const {
    children,
  } = props

  return (
    <div className={classes.wrapper}>
      <span className={classes.text}>{children}</span>
    </div>
  )
}