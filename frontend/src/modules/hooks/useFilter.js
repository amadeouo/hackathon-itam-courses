import {useState} from "react";

export const useFilter = (stack, format) => {
  const [filter, setFilter] = useState({
    stack: stack || null,
    format: format || null
  })

  return [filter, setFilter]
}

