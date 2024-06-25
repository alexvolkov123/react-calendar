import { createContext } from 'react'

import { UserContextType } from './user-type'

export const UserContext = createContext<UserContextType>({} as UserContextType)
