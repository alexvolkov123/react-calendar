import { getThemeColors } from './theme-colors'
import { themeTypes } from './theme-types'

export const themeSettings: any = (mode: themeTypes) => {
	const colors = getThemeColors(mode)
	const theme = {
		palette: {
			primary: {
				main: '#4d4d4d',
			},
		},
		components: {
			MuiButton: {
				variants: [
					{
						props: { id: 'auth' },
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
						props: { id: 'submitTask' },
						style: {
							backgroundColor: colors.theme?.DEFAULT,
							color: '#fff',
							boxShadow: 'none',
							width: 150,
							borderRadius: 10,
							':hover': {
								backgroundColor: colors.theme![200],
							},
						},
					},
					{
						props: { id: 'createTask' },
						style: {
							width: 120,
							backgroundColor: colors.theme?.DEFAULT,
							height: 120,
							borderRadius: 60,
							fontSize: 100,
							color: '#fff',
							':hover': {
								backgroundColor: colors.theme![200],
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
							backgroundColor: `${colors.theme!.DEFAULT}`,
							color: '#fff',
							boxShadow: 'none',
							fontSize: 20,
							height: 70,
							width: 70,
							boxSizing: 'border-box',
							fontWeight: 400,
							borderRadius: 5,
							border: `2px solid ${colors.theme![100]}`,
							':hover': {
								borderWidth: 2,
								backgroundColor: `${colors.theme![200]}`,
							},
						},
					},
				],
			},
			MuiContainer: {
				variants: [
					{
						props: { id: 'header' },
						style: {
							backgroundColor: colors.theme!.DEFAULT,
							margin: 0,
							padding: 0,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							'@media': {
								maxWidth: '100%',
							},
						},
					},
				],
			},
			MuiSvgIcon: {
				variants: [
					{
						props: { id: 'circle' },
						style: {
							color: `${colors.theme![300]}`,
							fontSize: 'smaller',
							position: 'absolute',
							right: 0,
							bottom: 0,
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
						padding: 10,
						minHeight: 370,
						minWidth: 240,
						borderRadius: 15,
						overflow: 'hidden',
					},
				},
			},
		},
	}
	return theme
}
