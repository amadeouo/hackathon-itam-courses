import classes from './Navigation.module.css'
import mainIcon from '@shared/assets/icons/main.svg'
import searchIcon from '@shared/assets/icons/search.svg'
import profileIcom from "@shared/assets/icons/profile.svg"
import classNames from "classnames";
import {Link} from "react-router-dom";


export const Navigation = () => {
  return (
    <nav className={classes.wrapper}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link to="/main">
            <img
              className={classNames("active", classes.icon)}
              src={mainIcon}
              alt="Main section"
              width="27"
              height="27"
              loading="lazy"
            />
          </Link>
        </li>
        <li className={classes.item}>
          <Link to="/search">
            <img
              className={classes.icon}
              src={searchIcon}
              alt="Search section"
              width="25"
              height="25"
              loading="lazy"
            />
          </Link>
        </li>
        <li className={classes.item}>
          <Link to="/profile">
            <img
              className={classes.icon}
              src={profileIcom}
              alt="Search section"
              width="24"
              height="24"
              loading="lazy"
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}