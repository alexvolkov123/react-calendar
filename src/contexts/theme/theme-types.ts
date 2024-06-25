export type ThemeTypes = 'blue' | 'yellow' | 'black'

export type ThemeColorsType = {
	theme: {
		DEFAULT: string
		'100': string
		'200': string
		'300': string
	}
}

export type ThemeContextType = {
	setColorMode: (mode: ThemeTypes) => void
	mode: ThemeTypes
}
