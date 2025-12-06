import {useState} from "react";
import {MainContext} from "./main-context";

export const MainProvider = (props) => {
  const { children } = props

  const [formDataSearch, setFormDataSearch] = useState({
    stack: [],
    sex: '',
  })
  const [formDataMain, setFormDataMain] = useState({
    stack: [],
    format: '',
    dateRange: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <MainContext.Provider value={
      {
        formDataSearch,
        setFormDataSearch,
        formDataMain,
        setFormDataMain,
        searchQuery,
        setSearchQuery,
      }
    }>
      {children}
    </MainContext.Provider>
  )
}