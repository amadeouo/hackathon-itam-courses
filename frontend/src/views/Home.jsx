import { Link } from 'react-router-dom'
import { auth } from '../utils/auth.js'

export function Home() {
  const isAuthed = auth.isAuthed()

  return (
    <div style={{ padding: 24 }}>
      <h1>Hackathon ITAM</h1>
      {isAuthed ? (
        <div style={{ marginTop: 12 }}>
          <p>Вы вошли в систему. JWT сохранён в localStorage.</p>
          <button onClick={() => { auth.clear(); location.reload(); }}>Выйти</button>
        </div>
      ) : (
        <div style={{ marginTop: 12 }}>
          <p>Чтобы продолжить, войдите через Telegram.</p>
          <Link to="/auth" style={{ display: 'inline-block', marginTop: 8 }}>Перейти к входу</Link>
        </div>
      )}
    </div>
  )
}

export default Home
