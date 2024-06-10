export type themeTypes = 'blue' | 'yellow' | 'black'

export type IThemeContext = {
	setColorMode: (mode: themeTypes) => void
	getColorMode: () => themeTypes
}
