import classes from './Hack.module.css'
import {ButtonBack} from "@shared/button-back/ui/ButtonBack/ButtonBack";
import {Navigation} from "@modules/Navigation/ui/Navigation";

export const Hack = () => {
  return (
    <>
      <header className={classes.wrapperHeader}>
        <ButtonBack />
      </header>
      <Navigation />
    </>
  )
}