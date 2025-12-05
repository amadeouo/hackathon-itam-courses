import { Link } from 'react-router-dom'
import { auth } from '@shared/auth-token/auth.js'
import classes from './Home.module.css'

export function Home() {
  const isAuthed = auth.isAuthed()

  return (
    <div className={classes.wrapper}>
      <h1>Hackathon ITAM</h1>
      {isAuthed ? (
        <div className={classes.access}>
          <p>Вы вошли в систему. JWT сохранён в localStorage.</p>
          <button onClick={() => { auth.clear(); location.reload(); }}>Выйти</button>
        </div>
      ) : (
        <div className={classes.auth}>
          <p>Чтобы продолжить, войдите через Telegram.</p>
          <Link to="/auth" style={{ display: 'inline-block', marginTop: 8 }}>Перейти к входу</Link>
        </div>
      )}
    </div>
  )
}