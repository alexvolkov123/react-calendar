export interface ThemeState {
	mode: themeTypes
}

export enum ThemeActionTypes {
	CHANGE_THEME = 'CHANGE_THEME',
}
export interface ChangeThemeAction {
	type: ThemeActionTypes.CHANGE_THEME
	payload: themeTypes
}

export type themeTypes = 'blue' | 'yellow' | 'black'

export interface IThemeContext {
	setColorMode: (mode: themeTypes) => void
	getColorMode: () => themeTypes
}
