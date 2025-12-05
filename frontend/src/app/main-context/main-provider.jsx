import {useState} from "react";
import {MainContext} from "./main-context";

export const MainProvider = (props) => {
  const { children } = props

  const [state, setState] = useState({})

  return (
    <MainContext.Provider value={{state, setState}}>
      {children}
    </MainContext.Provider>
  )
}