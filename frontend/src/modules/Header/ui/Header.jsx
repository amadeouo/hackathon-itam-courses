import classes from './Header.module.css'
import {useLocation} from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname

  const locationsPath = [
    {
      path: '/main',
      title: 'Хакатоны'
    },
    {
      path: '/search',
      title: 'Поиск'
    },
    {
      path: '/hack',
      title: 'О Хакатоне'
    },
    {
      path: '/users',
      title: 'Об участнике'
    }
  ]


  return (
    <header className={classes.wrapper}>
      <h1 className={classes.header1}>
        {locationsPath.find(item => location.includes(item.path))?.title}
      </h1>
    </header>
  )
}