import classes from './MainMenu.module.css'
import { Search } from '@modules/Search/ui/Search'
import { useState } from 'react'
import {UsersCardList} from "@modules/UsersCard/ui";

// Тестовые данные (пример)
const HACKATHONS = [
  {
    id: 1,
    name: 'ИТАМ Хакатон 2025',
    date: '10.12 - 15.12',
    format: 'offline',
    desc: 'Большой хакатон для всех, делаем будущее образования.',
    owner: '@itammanager',
    color: '#D7EBCB',
  },
  {
    id: 2,
    name: 'AI Challenge',
    date: '20.12 - 22.12',
    format: 'online',
    desc: 'Соревнование по искусственному интеллекту!',
    owner: '@aiadmin',
    color: '#FFFFFF',
  },
  {
    id: 3,
    name: 'Весенний Хакатон',
    date: '05.03 - 07.03',
    format: 'offline',
    desc: 'Весна в коде и новые проекты!',
    owner: '@springlead',
    color: '#DADAFE',
  },
  {
    id: 4,
    name: 'Data Science Weekend',
    date: '21.04 - 23.04',
    format: 'offline',
    desc: 'Марафон по Data Science: анализ, визуализация, суперкоманда!',
    owner: '@datasteve',
    color: '#FCF2C2',
  },
  {
    id: 5,
    name: 'Девогонка',
    date: '10.06 - 11.06',
    format: 'online',
    desc: 'Кто быстрее всех поднимет working solution?',
    owner: '@d3vrunner',
    color: '#F7CBF7',
  },
  {
    id: 6,
    name: 'Student IT League',
    date: '26.08 - 30.08',
    format: 'offline',
    desc: 'Главное ИТ событие лета для студентов всех курсов!',
    owner: '@leaguechief',
    color: '#D9F8F8',
  },
];

function CardHackathon({ hack, open, onToggle, style }) {
  return (
    <div
      className={classes.card + ' ' + (open ? classes.cardOpen : '')}
      style={{ background: hack.color, ...style }}
      onClick={onToggle}
      tabIndex={0}
      aria-expanded={open}
    >
      <div className={classes.cardHeader}>
        <div className={classes.hackTitle}>{hack.name}</div>
        <div className={classes.cardRow}>
          <span className={classes.cardTag}>{hack.date}</span>
          <span className={classes.cardTag}>{hack.format === 'offline' ? 'оффлайн' : 'онлайн'}</span>
        </div>
      </div>
      <div className={classes.cardCollapse} style={{ maxHeight: open ? 250 : 0, overflow: 'hidden', transition: 'max-height 0.3s' }}>
        {open && <>
          <div className={classes.cardDesc}>{hack.desc}</div>
          <div className={classes.cardOwner}>Ответственный: <b>{hack.owner}</b></div>
          <button className={classes.participateBtn}>Участвовать</button>
        </>}
      </div>
    </div>
  )
}

export const MainMenu = (props) => {
  const {
    isSearchPage
  } = props

  const [openCards, setOpenCards] = useState([]) // массив id открытых карточек
  const [filtered, setFiltered] = useState(HACKATHONS)

  const toggleCard = i => {
    setOpenCards(curr => curr.includes(i) ? curr.filter(id => id !== i) : [...curr, i])
  }

  const handleSearchFilter = resultArr => setFiltered(resultArr)

  return (
    <section className={classes.wrapper}>
      <Search isHaveFilter onResult={handleSearchFilter} hacks={HACKATHONS} />
      <div className={classes.cardsStack}>
        {isSearchPage
          ? (<UsersCardList />)
          : filtered.map((hack, idx) => (
            <CardHackathon
              key={hack.id}
              hack={hack}
              open={openCards.includes(hack.id)}
              onToggle={e => { e.stopPropagation(); toggleCard(hack.id); }}
              style={{ zIndex: 10 - idx, marginTop: idx > 0 ? -36 : 0 }}
            />
          ))
        }
        {filtered.length === 0 && !isSearchPage && <div className={classes.noResults}>Нет подходящих хакатонов</div>}
      </div>
    </section>
  )
}