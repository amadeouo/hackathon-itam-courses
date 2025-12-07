import { useContext, useState, useEffect, useRef } from 'react'
import classes from './Search.module.css'
import { FilterDialog } from '@shared/Dialog/ui/FilterDialog'
import { useLocation } from 'react-router-dom'
import { MainContext } from '@app/main-context/main-context'

function filterHacks(hacks, { searchQuery, filters }) {
  return hacks.filter(hack => {
    const matchFormat = !filters?.format || hack.format === filters.format;
    const q = searchQuery?.trim().toLowerCase();
    const matchQuery = !q || hack.name.toLowerCase().includes(q) || hack.desc.toLowerCase().includes(q);
    const matchStack = !filters?.stack || filters.stack.length === 0 || (hack.stack && hack.stack.some(s => filters.stack.includes(s)));
    return matchFormat && matchStack && matchQuery;
  });
}

export const Search = (props) => {
  const {
    isHaveFilter,
    isSearchFilter: isSearchFilterProp,
    onResult,
    hacks = []
  } = props

  const location = useLocation().pathname
  const isSearchFilter = isSearchFilterProp !== undefined 
    ? isSearchFilterProp 
    : location === '/search'

  const { searchQuery, setSearchQuery, formDataMain } = useContext(MainContext)
  const [localQuery, setLocalQuery] = useState(searchQuery || '')
  const debounceRef = useRef()

  // Универсальный debounce-фильтрация для любых страниц
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setSearchQuery(localQuery)
      if (typeof onResult === 'function' && hacks.length > 0) {
        const result = filterHacks(hacks, { searchQuery: localQuery, filters: formDataMain })
        onResult(result)
      }
    }, 300)
    return () => clearTimeout(debounceRef.current)
    // eslint-disable-next-line
  }, [localQuery, formDataMain, hacks])

  // Submit — мгновенная фильтрация, debounce сбрасываем
  const handleSubmit = (e) => {
    e.preventDefault()
    if (debounceRef.current) clearTimeout(debounceRef.current)
    setSearchQuery(localQuery)
    if (typeof onResult === 'function' && hacks.length > 0) {
      const result = filterHacks(hacks, { searchQuery: localQuery, filters: formDataMain })
      onResult(result)
    }
  }

  const handleChange = (e) => {
    setLocalQuery(e.target.value)
  }

  return (
    <form
      className={classes.wrapper}
      data-js-todo-search-form
      onSubmit={handleSubmit}
    >
      <div className={classes.searchWrapper}>
        <button className={classes.searchImage} type="submit">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5445 22.5445L17.8821 17.8821M17.8821 17.8821C18.6796 17.0845 19.3122 16.1377 19.7439 15.0957C20.1755 14.0537 20.3976 12.9369 20.3976 11.809C20.3976 10.6811 20.1755 9.56431 19.7439 8.5223C19.3122 7.48028 18.6796 6.53348 17.8821 5.73596C17.0846 4.93844 16.1378 4.30581 15.0958 3.87419C14.0537 3.44257 12.9369 3.22042 11.809 3.22042C10.6812 3.22042 9.56435 3.44257 8.52234 3.87419C7.48032 4.30581 6.53352 4.93844 5.736 5.73596C4.12533 7.34663 3.22046 9.53117 3.22046 11.809C3.22046 14.0868 4.12533 16.2714 5.736 17.8821C7.34667 19.4927 9.53121 20.3976 11.809 20.3976C14.0869 20.3976 16.2714 19.4927 17.8821 17.8821Z" stroke="black" strokeWidth="2.68386" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <input
          className={classes.input}
          type="search"
          id="search"
          placeholder={isSearchFilter ? 'Поиск участников' : 'Поиск хакатонов'}
          value={localQuery}
          onChange={handleChange}
        />
      </div>
      {isHaveFilter && <FilterDialog isSearchFilter={isSearchFilter} />}
    </form>
  )
}