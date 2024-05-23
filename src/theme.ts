import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#4d4d4d',
		},
		secondary: {
			main: '#19adbd',
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', type: 'submit' },
					style: {
						backgroundColor: '#fba4b3',
						color: '#fff',
						boxShadow: 'none',
						width: 150,
						borderRadius: 10,
						':hover': {
							backgroundColor: '#fba4b3',
						},
					},
				},
				{
					props: { variant: 'outlined' },
					style: {
						backgroundColor: '#fff',
						color: '#000',
						boxShadow: 'none',
						height: 25,
						width: 90,
						fontWeight: 100,
						textTransform: 'none',
						borderRadius: 10,
						border: '2px solid #024d02',
						':hover': {
							borderWidth: 2,
							backgroundColor: '#f3f3f3',
						},
					},
				},
				{
					props: { variant: 'contained', type: 'button' },
					style: {
						backgroundColor: '#19adbd',
						color: '#fff',
						boxShadow: 'none',
						fontSize: 20,
						height: 70,
						width: 70,
						boxSizing: 'border-box',
						fontWeight: 400,
						borderRadius: 5,
						border: '2px solid #024d02',
						':hover': {
							borderWidth: 2,
							backgroundColor: '#21d0e3',
						},
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
		MuiSelect: {
			styleOverrides: {
				root: {
					width: 200,
					textAlign: 'left',
				},
				icon: {
					fontSize: 40,
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				root: {
					boxSizing: 'border-box',
					backgroundColor: 'transparent',
				},
				container: {
					padding: 20,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					boxSizing: 'border-box',
					padding: 20,
					minHeight: 370,
					minWidth: 240,
					borderRadius: 15,
					overflow: 'hidden',
				},
			},
		},
	},
})
