import { createContext } from 'react'
import { UserContext } from './types/types'

export const Context = createContext<UserContext>({} as UserContext)
