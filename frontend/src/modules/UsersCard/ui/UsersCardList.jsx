import { useMemo, useState, useEffect, useContext } from 'react'
import { UsersCard } from './UsersCard'
import classes from './UsersCardList.module.css'
import { MainContext } from '@app/main-context/main-context'

// Моковые данные пользователей (в будущем будут браться с бэкенда)
const MOCK_USERS = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Петров',
    avatar: null, // здесь будет ссылка на картинку
    specialization: 'Фронтенд',
    sex: 'male',
    stack: ['Фронтенд', 'Бекенд'],
  },
  {
    id: 2,
    firstName: 'Мария',
    lastName: 'Сидорова',
    avatar: null,
    specialization: 'Дизайнер',
    sex: 'female',
    stack: ['Дизайнер'],
  },
  {
    id: 3,
    firstName: 'Алексей',
    lastName: 'Козлов',
    avatar: null,
    specialization: 'Бекенд',
    sex: 'male',
    stack: ['Бекенд', 'ML-инженер'],
  },
  {
    id: 4,
    firstName: 'Елена',
    lastName: 'Новикова',
    avatar: null,
    specialization: 'Продакт',
    sex: 'female',
    stack: ['Продакт', 'Аналитик'],
  },
  {
    id: 5,
    firstName: 'Дмитрий',
    lastName: 'Морозов',
    avatar: null,
    specialization: 'Тестировщик',
    sex: 'male',
    stack: ['Тестировщик'],
  },
  {
    id: 6,
    firstName: 'Анна',
    lastName: 'Волкова',
    avatar: null,
    specialization: 'Аналитик',
    sex: 'female',
    stack: ['Аналитик', 'Продакт'],
  },
  {
    id: 7,
    firstName: 'Сергей',
    lastName: 'Соколов',
    avatar: null,
    specialization: 'ML-инженер',
    sex: 'male',
    stack: ['ML-инженер', 'Бекенд'],
  },
  {
    id: 8,
    firstName: 'Ольга',
    lastName: 'Лебедева',
    avatar: null,
    specialization: 'Фронтенд',
    sex: 'female',
    stack: ['Фронтенд', 'Дизайнер'],
  },
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
        <UsersCard key={user.id} user={user} />
      ))}
    </div>
  )
}

