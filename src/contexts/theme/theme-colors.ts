export const getThemeColors = (mode: string) => ({
	...(mode === 'blue' && {
		theme: {
			DEFAULT: '#19adbd',
			'100': '#024d02',
			'200': '#21d0e3',
			'300': '#4d4d4d',
		},
	}),
	...(mode === 'yellow' && {
		theme: {
			DEFAULT: '#eed42e',
			'100': '#edb233',
			'200': '#ede221',
			'300': '#8e299a',
		},
	}),
	...(mode === 'black' && {
		theme: {
			DEFAULT: '#292929',
			'100': '#a29797',
			'200': '#959595',
			'300': '#e7e7e7',
		},
	}),
})
