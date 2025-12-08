import classes from './MainMenu.module.css'
import { Search } from '@modules/Search/ui/Search'
import { useState } from 'react'
import {UsersCardList} from "@modules/UsersCard/ui";
import {Link} from 'react-router-dom'

// Тестовые данные (пример)
export const HACKATHONS = [
  {
    id: 1,
    name: 'ИТАМ Хакатон 2025',
    date: '10.12 - 15.12',
    format: 'offline',
    desc: 'Большой хакатон для всех, делаем будущее образования.',
    owner: '@itammanager',
    color: '#D7EBCB',
    descLong:
      'ИТАМ Хакатон 2025 — это офлайн‑марафон для студентов и молодых специалистов, которые хотят повлиять на будущее образования через технологии. За несколько дней участники формируют команды, придумывают концепцию, разрабатывают прототипы цифровых решений для школ, вузов и EdTech‑платформ, а затем защищают проекты перед экспертами из индустрии и академии.'
  },
  {
    id: 2,
    name: 'AI Challenge',
    date: '20.12 - 22.12',
    format: 'online',
    desc: 'Соревнование по искусственному интеллекту!',
    owner: '@aiadmin',
    color: '#FFFFFF',
    descLong:
      'AI Challenge — онлайн‑соревнование по искусственному интеллекту, где участники решают прикладные ML‑и AI‑задачи в формате интенсивного челленджа. Команды и одиночные участники работают над моделями, которые должны показывать высокую точность и устойчивость, а также оформляют решение так, чтобы его можно было использовать в реальных продуктах и сервисах.'
  },
  {
    id: 3,
    name: 'Весенний Хакатон',
    date: '05.03 - 07.03',
    format: 'offline',
    desc: 'Весна в коде и новые проекты!',
    owner: '@springlead',
    color: '#DADAFE',
    descLong:
      'Весенний Хакатон — офлайн‑событие, которое открывает сезон новых IT‑идей и коллабораций. Участники собираются в одном пространстве, чтобы за несколько дней придумать и реализовать прототипы сервисов, игр и веб‑приложений, протестировать гипотезы и получить фидбек от менторов, а также найти единомышленников для дальнейших проектов.'
  },
  {
    id: 4,
    name: 'Data Science Weekend',
    date: '21.04 - 23.04',
    format: 'offline',
    desc: 'Марафон по Data Science: анализ, визуализация, суперкоманда!',
    owner: '@datasteve',
    color: '#FCF2C2',
    descLong:
      'Data Science Weekend — интенсивный офлайн‑уикенд, посвящённый полному циклу работы с данными: от сбора и очистки до продвинутой аналитики и визуализации. Команды получают реальные датасеты, формулируют гипотезы, создают модели и дашборды, а затем презентуют решения жюри, демонстрируя как техническую глубину, так и понятную подачу результатов.'
  },
  {
    id: 5,
    name: 'Девогонка',
    date: '10.06 - 11.06',
    format: 'online',
    desc: 'Кто быстрее всех поднимет working solution?',
    owner: '@d3vrunner',
    color: '#F7CBF7',
    descLong:
      'Девогонка — динамичное онлайн‑соревнование для разработчиков, где главное — скорость и качество вывода решения в продакшн‑формат. Участники получают техническое задание, быстро проектируют архитектуру, поднимают сервис, настраивают деплой и демонстрируют рабочий прототип, соревнуясь за звание самой быстрой и эффективной команды.'
  },
  {
    id: 6,
    name: 'Student IT League',
    date: '26.08 - 30.08',
    format: 'offline',
    desc: 'Главное ИТ событие лета для студентов всех курсов!',
    owner: '@leaguechief',
    color: '#D9F8F8',
    descLong:
      'Student IT League — крупное офлайн‑событие, объединяющее студентов разных курсов и вузов вокруг IT‑кейсов от компаний и партнёров. В течение нескольких дней участники проходят трек от постановки задачи и анализа требований до разработки и презентации решений, получают менторство от практикующих специалистов и шанс заявить о себе потенциальным работодателям.'
  }
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
          <Link to={`/hack/${hack.id}`} className={classes.link} >
            <button className={classes.participateBtn}>Участвовать</button>
          </Link>
        </>}
      </div>
    </div>
  )
}

export const MainMenu = (props) => {
  const {
    isSearchPage
  } = props

  const [openCards, setOpenCards] = useState([])
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