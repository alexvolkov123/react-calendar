import { createContext } from 'react'

import { IThemeContext } from './theme-types'

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)
