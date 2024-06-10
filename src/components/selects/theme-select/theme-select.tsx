import { MenuItem, Select } from '@mui/material'
import { useContext } from 'react'

import { themeTypes } from '../../../contexts/theme/theme-types'
import { ThemeContext } from '../../../contexts/theme/theme.context'

export const ThemeSelect = () => {
	const { getColorMode, setColorMode } = useContext(ThemeContext)
	const modes: themeTypes[] = ['blue', 'black', 'yellow']

	const handleChangeTheme = (mode: themeTypes) => {
		setColorMode(mode)
	}

	return (
		<Select
			value={getColorMode()}
			onChange={e => handleChangeTheme(e.target.value as themeTypes)}
		>
			{modes.map(mode => (
				<MenuItem value={mode} key={mode}>
					{mode}
				</MenuItem>
			))}
		</Select>
	)
}
