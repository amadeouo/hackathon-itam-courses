import classes from './Hack.module.css'
import {ButtonBack} from "@shared/button-back/ui/ButtonBack/ButtonBack";
import {useLocation} from "react-router-dom";
import {Badge} from "@shared/badge/ui/Badge";
import {HACKATHONS} from "@modules/MainMenu/ui/MainMenu";

export const Hack = (props) => {
  const locationHackId = useLocation().pathname.at(-1)
  const hackInfo = HACKATHONS[locationHackId - 1]

  return (
    <section className={classes.wrapperSection}>
      <div className={classes.photoHack}>
        <ButtonBack />
        Обложка хакатона
      </div>
      <div className={classes.badges}>
        <Badge>{hackInfo.date}</Badge>
        <Badge>{hackInfo.format === 'offline' ? 'оффлайн' : 'онлайн'}</Badge>
      </div>
      <div className={classes.desc}>
        <span>{hackInfo.descLong}</span>
      </div>
      <button className={classes.button}>
        Участвую
      </button>
    </section>
  )
}