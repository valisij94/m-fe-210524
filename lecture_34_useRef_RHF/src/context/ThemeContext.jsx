import { createContext } from 'react';
import { useState } from 'react';

// по-прежнему экспортируем контекст - он нам понадобится в потребителях
export const ThemeContext = createContext('light');

// создаем уже готовый к употреблению провайдер контекста.
export function ThemeContextProvider( {children} ) {

  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    setTheme( old => old === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme: theme, switchTheme: switchTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}