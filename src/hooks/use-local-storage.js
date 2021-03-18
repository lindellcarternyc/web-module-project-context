import { useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key)
    if (!storedValue) return defaultValue

    return JSON.parse(storedValue)
  })

  const onChange = (newValue) => {
    setValue(newValue)
    window.localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, onChange]
}
