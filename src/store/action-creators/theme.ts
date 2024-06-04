import { ThemeActionTypes, themeTypes } from '../../types/theme'

export function createActionChangeMode(mode: themeTypes) {
	return { type: ThemeActionTypes.CHANGE_THEME, payload: mode }
}
