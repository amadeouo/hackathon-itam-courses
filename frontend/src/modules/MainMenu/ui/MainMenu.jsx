import classes from './MainMenu.module.css'
import {Search} from "@modules/Search/ui/Search";

export const MainMenu = () => {
  return (
    <section className={classes.wrapper}>
      <Search isHaveFilter />
    </section>
  )
}