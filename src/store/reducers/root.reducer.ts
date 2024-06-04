import { combineReducers } from 'redux'
import { themeReducer } from './theme.reducer'
import { userReducer } from './user.reducer'

export const rootReducer = combineReducers({
	user: userReducer,
	theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
