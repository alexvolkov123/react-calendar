import { ThemeColorsType, ThemeTypes } from './theme-types'

export const getThemeColors = (mode: ThemeTypes): ThemeColorsType => {
	const themeColors = () => {
		switch (mode) {
			case 'blue':
				return {
					theme: {
						DEFAULT: '#19adbd',
						'100': '#024d02',
						'200': '#21d0e3',
						'300': '#4d4d4d',
					},
				}
			case 'yellow':
				return {
					theme: {
						DEFAULT: '#eed42e',
						'100': '#edb233',
						'200': '#ede221',
						'300': '#8e299a',
					},
				}
			case 'black':
				return {
					theme: {
						DEFAULT: '#292929',
						'100': '#a29797',
						'200': '#959595',
						'300': '#e7e7e7',
					},
				}
			default:
				return {
					theme: {
						DEFAULT: '#19adbd',
						'100': '#024d02',
						'200': '#21d0e3',
						'300': '#4d4d4d',
					},
				}
		}
	}
	return themeColors()
}
