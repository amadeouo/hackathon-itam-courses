import { useEffect, useRef } from 'react'
import { useNavigate} from 'react-router-dom'
import { auth } from '@shared/auth-token/auth.js'
import classes from './Auth.module.css'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api'
const BOT_USERNAME = import.meta.env.VITE_TG_BOT_USERNAME || ''

export function Auth() {
  const navigate = useNavigate()
  const widgetRef = useRef(null)

  useEffect(() => {
    if (!BOT_USERNAME) {
      console.warn('VITE_TG_BOT_USERNAME is not set. Telegram widget will not render.')
      return
    }

    window.onTelegramAuth = async function onTelegramAuth(user) {
      try {
        const res = await fetch(`${API_BASE}/auth/telegram`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        })
        const data = await res.json()
        if (!res.ok) {
          alert(data?.message || 'Ошибка входа через Telegram')
          return
        }
        auth.setToken(data.token)
        navigate('/main')
      } catch (e) {
        console.error(e)
        alert('Сетевая ошибка при попытке входа')
      }
    }

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://telegram.org/js/telegram-widget.js?22'
    script.setAttribute('data-telegram-login', BOT_USERNAME)
    script.setAttribute('data-size', 'large')
    script.setAttribute('data-userpic', 'false')
    script.setAttribute('data-request-access', 'write')
    script.setAttribute('data-lang', 'ru')
    script.setAttribute('data-onauth', 'onTelegramAuth(user)')

    const container = widgetRef.current
    if (container) container.appendChild(script)

    return () => {
      if (container && script.parentNode === container) {
        return container.removeChild(script)
      }
      try { delete window.onTelegramAuth } catch (_) {}
    }
  }, [navigate])

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>Вход через Telegram</h2>
      {!BOT_USERNAME && (
        <p>
          Не задан VITE_TG_BOT_USERNAME. Укажите юзернейм бота в .env фронтенда, например:
          <br />
          <code>VITE_TG_BOT_USERNAME=your_bot_username</code>
        </p>
      )}
      <div ref={widgetRef} />
      <button onClick={() => navigate('/')} className={classes.button}>На главную</button>
    </div>
  )
}

export default Auth
