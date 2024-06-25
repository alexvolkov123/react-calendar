import { SelectChangeEvent } from '@mui/material'
import { memo, useCallback, useContext } from 'react'

import { ThemeTypes } from '../../../../contexts/theme/theme-types'
import { ThemeContext } from '../../../../contexts/theme/theme.context'
import { BaseSelect } from '../base-select/base-select'

export const ThemeSelect = memo(() => {
	const { mode, setColorMode } = useContext(ThemeContext)
	const modes: ThemeTypes[] = ['blue', 'black', 'yellow']

	const handleChangeTheme = useCallback(
		(e: SelectChangeEvent) => setColorMode(e.target.value as ThemeTypes),
		[setColorMode]
	)

	return (
		<BaseSelect
			items={modes}
			selectedItem={mode}
			onChange={handleChangeTheme}
		/>
	)
})
