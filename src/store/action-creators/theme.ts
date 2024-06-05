import { ThemeActionTypes, themeTypes } from '../../types/theme'

export function ChangeMode(mode: themeTypes) {
	return { type: ThemeActionTypes.CHANGE_THEME, payload: mode }
}
