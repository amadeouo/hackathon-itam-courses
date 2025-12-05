import classes from './Navigation.module.css'
import mainIcon from '@shared/assets/icons/main.svg'
import searchIcon from '@shared/assets/icons/search.svg'
import profileIcom from "@shared/assets/icons/profile.svg"
import classNames from "classnames";


export const Navigation = () => {
  return (
    <nav className={classes.wrapper}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <img
            className={classNames("active", classes.icon)}
            src={mainIcon}
            alt="Main section"
            width="27"
            height="27"
            loading="lazy"
          />
        </li>
        <li className={classes.item}>
          <img
            className={classes.icon}
            src={searchIcon}
            alt="Main section"
            width="25"
            height="25"
            loading="lazy"
          />
        </li>
        <li className={classes.item}>
          <img
            className={classes.icon}
            src={profileIcom}
            alt="Main section"
            width="24"
            height="24"
            loading="lazy"
          />
        </li>
      </ul>
    </nav>
  )
}