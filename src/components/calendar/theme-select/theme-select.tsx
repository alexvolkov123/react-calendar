import { SelectChangeEvent } from '@mui/material'
import { memo, useCallback, useContext, useMemo } from 'react'

import { ThemeTypes } from '../../../contexts/theme/theme-types'
import { ThemeContext } from '../../../contexts/theme/theme.context'
import { BaseSelect } from '../../ui/base-select/base-select'

export const ThemeSelect = memo(() => {
	const { mode, setColorMode } = useContext(ThemeContext)
	const modes: ThemeTypes[] = useMemo(() => ['blue', 'black', 'yellow'], [])

	const handleChangeTheme = useCallback(
		(e: SelectChangeEvent) => setColorMode(e.target.value as ThemeTypes),
		[setColorMode]
	)
	const convertedModes = useMemo(() => {
		return modes.map(mode => ({ label: mode, value: mode }))
	}, [modes])

	return (
		<BaseSelect
			items={convertedModes}
			selectedItem={mode}
			onChange={handleChangeTheme}
		/>
	)
})
