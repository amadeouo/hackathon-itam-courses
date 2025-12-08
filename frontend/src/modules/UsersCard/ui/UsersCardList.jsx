import { useMemo, useState, useEffect, useContext } from 'react'
import { UsersCard } from './UsersCard'
import classes from './UsersCardList.module.css'
import { MainContext } from '@app/main-context/main-context'
import { Link } from 'react-router-dom'

export const MOCK_USERS = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Петров',
    avatar: null, // здесь будет ссылка на картинку
    specialization: 'Фронтенд',
    sex: 'male',
    stack: ['Фронтенд', 'Бекенд'],
    desc: 'Фронтенд‑разработчик с опытом во фронтенде и бэкенде, уверенно чувствует себя как в интерфейсах, так и в серверной логике.',
    nickname: '@ivan_front_fullstack'
  },
  {
    id: 2,
    firstName: 'Мария',
    lastName: 'Сидорова',
    avatar: null,
    specialization: 'Дизайнер',
    sex: 'female',
    stack: ['Дизайнер'],
    desc: 'Продуктовый дизайнер, фокусируется на UX/UI и визуальной части интерфейсов, отвечает за удобство и стиль продукта.',
    nickname: '@maria_uiux'
  },
  {
    id: 3,
    firstName: 'Алексей',
    lastName: 'Козлов',
    avatar: null,
    specialization: 'Бекенд',
    sex: 'male',
    stack: ['Бекенд', 'ML-инженер'],
    desc: 'Бэкенд‑разработчик с опытом в ML, умеет строить надежные API и интегрировать модели машинного обучения в продукт.',
    nickname: '@alex_backend_ml'
  },
  {
    id: 4,
    firstName: 'Елена',
    lastName: 'Новикова',
    avatar: null,
    specialization: 'Продакт',
    sex: 'female',
    stack: ['Продакт', 'Аналитик'],
    desc: 'Продакт‑менеджер с сильной аналитической базой, умеет собирать требования, считать метрики и развивать продукт по данным.',
    nickname: '@elena_product_owner'
  },
  {
    id: 5,
    firstName: 'Дмитрий',
    lastName: 'Морозов',
    avatar: null,
    specialization: 'Тестировщик',
    sex: 'male',
    stack: ['Тестировщик'],
    desc: 'Тестировщик, отвечает за качество продукта, пишет тест‑кейсы и находит критические баги до релиза.',
    nickname: '@dmitry_qa'
  },
  {
    id: 6,
    firstName: 'Анна',
    lastName: 'Волкова',
    avatar: null,
    specialization: 'Аналитик',
    sex: 'female',
    stack: ['Аналитик', 'Продакт'],
    desc: 'Продуктовый аналитик, соединяет данные и бизнес‑цели, помогает принимать продуктовые решения на основе метрик.',
    nickname: '@anna_data_product'
  },
  {
    id: 7,
    firstName: 'Сергей',
    lastName: 'Соколов',
    avatar: null,
    specialization: 'ML-инженер',
    sex: 'male',
    stack: ['ML-инженер', 'Бекенд'],
    desc: 'ML‑инженер с бэкенд‑бэкграундом, внедряет модели в прод и оптимизирует их работу на сервере.',
    nickname: '@sergey_ml_engineer'
  },
  {
    id: 8,
    firstName: 'Ольга',
    lastName: 'Лебедева',
    avatar: null,
    specialization: 'Фронтенд',
    sex: 'female',
    stack: ['Фронтенд', 'Дизайнер'],
    desc: 'Фронтенд‑разработчик с дизайнерским вкусом, сочетает качественную верстку с продуманным UI.',
    nickname: '@olga_front_design'
  }

]

export const UsersCardList = () => {
  const { formDataSearch, searchQuery = '' } = useContext(MainContext)
  const [users, setUsers] = useState(MOCK_USERS)

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      if (searchQuery) {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
        const query = searchQuery.toLowerCase()
        if (!fullName.includes(query)) {
          return false
        }
      }

      if (formDataSearch.stack && formDataSearch.stack.length > 0) {
        const hasMatchingStack = formDataSearch.stack.some(stackItem =>
          user.stack.includes(stackItem)
        )
        if (!hasMatchingStack) {
          return false
        }
      }

      if (formDataSearch.sex && formDataSearch.sex !== '') {
        if (user.sex !== formDataSearch.sex) {
          return false
        }
      }

      return true
    })
  }, [users, searchQuery, formDataSearch.stack, formDataSearch.sex])

  // В будущем здесь будет запрос к бэкенду
  useEffect(() => {
    // fetch('/api/users', { ... })
    //   .then(res => res.json())
    //   .then(data => setUsers(data))
  }, [])

  if (filteredUsers.length === 0) {
    return (
      <div className={classes.empty}>
        <p>Пользователи не найдены</p>
      </div>
    )
  }

  return (
    <div className={classes.list}>
      {filteredUsers.map(user => (
        <Link to={`/users/${user.id}`} key={user.id} className={classes.link} style={{textDecoration:'none', color: 'black'}}>
          <UsersCard key={user.id} user={user} />
        </Link>
      ))}
    </div>
  )
}

