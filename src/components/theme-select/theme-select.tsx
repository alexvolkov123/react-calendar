import { MenuItem, Select } from '@mui/material'
import { useMode } from '../../hooks/useMode'
import { themeTypes } from '../../types/theme'

export default function ThemeSelect() {
	const { getColorMode, setColorMode } = useMode()
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
