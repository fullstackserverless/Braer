import React from 'react'

export const lightTheme = {
  name: 'Light',
  headerBG: '#fff',
  pageBG: '#F7F9FC',
  tabNavigationBG: '#fff',
  textColor: '#1B2036',
  iconColor: '#232A43',
  iconActiveColor: '#F19C4A'
}
export const darkTheme = {
  name: 'Dark',
  headerBG: '#1B2036',
  pageBG: '#232A43',
  tabNavigationBG: '#1B2036',
  textColor: '#fff',
  iconColor: '#F7F9FC',
  iconActiveColor: '#F19C4A'
}

export const customLightTheme = {
  // Не активные иконкиo
  'color-basic-600': lightTheme.iconColor,
  // активные иконки
  'color-primary-500': lightTheme.iconActiveColor,

  //фон level 3
  'background-basic-color-3': lightTheme.pageBG,

  // цвет панели табов
  'color-basic-100': lightTheme.tabNavigationBG
}
export const customDarkTheme = {
  // Не активные иконкиo
  'color-basic-600': darkTheme.iconColor,
  // активные иконки
  'color-primary-500': darkTheme.iconActiveColor,

  //фон level 3
  'background-basic-color-3': darkTheme.pageBG,

  // цвет панели табов
  'color-basic-100': darkTheme.tabNavigationBG,
  //Цвет обычного текста
  'text-basic-color': darkTheme.iconColor
}
export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
})
