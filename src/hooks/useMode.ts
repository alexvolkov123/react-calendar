import { Theme, createTheme } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'

import { themeSettings } from '../contexts/theme/theme-settings'
import { themeTypes } from '../contexts/theme/theme-types'
import { localStorageTypes } from './local-storage/types'

export const useMode = () => {
	const [mode, setMode] = useState<themeTypes>(
		(localStorage.getItem(localStorageTypes.mode) as themeTypes) || 'blue'
	)

	const setColorMode = useCallback((mode: themeTypes): void => {
		setMode(mode)
		localStorage.setItem(localStorageTypes.mode, mode)
	}, [])

	const theme = useMemo((): Theme => createTheme(themeSettings(mode)), [mode])

	const getColorMode = useCallback((): themeTypes => {
		return mode
	}, [mode])

	return { theme, setColorMode, getColorMode }
}
