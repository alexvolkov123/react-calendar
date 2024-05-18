import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#4d4d4d',
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained' },
					style: {
						backgroundColor: '#fba4b3',
						color: '#fff',
						boxShadow: 'none',
						width: 150,
						borderRadius: 10,
					},
				},
			],
		},
		MuiTextField: {
			variants: [
				{
					props: { variant: 'outlined' },
					style: {
						width: '100%',
					},
				},
			],
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					width: '100%',
					backgroundColor: '#e8e8e8',
					color: '#4d4d4d',
				},
				notchedOutline: {
					borderWidth: 2,
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					height: 0,
					margin: 0,
				},
			},
		},
	},
})
