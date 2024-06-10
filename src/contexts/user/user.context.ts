import { createContext } from 'react'

import { IUserContext } from './user-type'

export const UserContext = createContext<IUserContext>({} as IUserContext)
