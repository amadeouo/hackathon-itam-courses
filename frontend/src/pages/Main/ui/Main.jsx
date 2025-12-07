import { Link } from 'react-router-dom'
import { auth } from '@shared/auth-token/auth.js'
import classes from './Main.module.css'
import {PageWrapper} from "@shared/page-wrapper/ui/PageWrapper";

export function Main() {
  const isAuthed = auth.isAuthed()

  if (isAuthed) {
    return <PageWrapper />
  } else {
    return (
      <div className={classes.auth}>
        <p>Чтобы продолжить, войдите через Telegram.</p>
        <Link to="/auth">Перейти к входу</Link>
      </div>
    )
  }
}