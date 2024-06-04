import {
	ChangeThemeAction,
	ThemeActionTypes,
	ThemeState,
	themeTypes,
} from '../../types/theme'

const initialState: ThemeState = {
	mode: (localStorage.getItem('mode') as themeTypes) || 'blue',
}

export const themeReducer = (
	state: ThemeState = initialState,
	action: ChangeThemeAction
) => {
	switch (action.type) {
		case ThemeActionTypes.CHANGE_THEME: {
			return { ...state, mode: action.payload }
		}
	}
	return state
}
