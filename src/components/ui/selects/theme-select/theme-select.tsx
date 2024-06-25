import { MenuItem, Select } from '@mui/material'
import { memo, useCallback, useContext } from 'react'

import { ThemeTypes } from '../../../../contexts/theme/theme-types'
import { ThemeContext } from '../../../../contexts/theme/theme.context'

export const ThemeSelect = memo(() => {
	const { mode, setColorMode } = useContext(ThemeContext)
	const modes: ThemeTypes[] = ['blue', 'black', 'yellow']

	const handleChangeTheme = useCallback(
		(mode: ThemeTypes): void => {
			setColorMode(mode)
		},
		[setColorMode]
	)

	return (
		<Select
			value={mode}
			onChange={e => handleChangeTheme(e.target.value as ThemeTypes)}
		>
			{modes.map(mode => (
				<MenuItem value={mode} key={mode}>
					{mode}
				</MenuItem>
			))}
		</Select>
	)
})
