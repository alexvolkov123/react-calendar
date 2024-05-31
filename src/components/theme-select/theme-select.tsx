import { MenuItem, Select } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme/theme.context'
import { themeTypes } from '../../types/types'

export default function ThemeSelect() {
	const { getColorMode, setColorMode } = useContext(ThemeContext)
	const modes: themeTypes[] = ['blue', 'black', 'yellow']

	function handleChangeTheme(mode: themeTypes) {
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
