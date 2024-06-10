import { createTheme } from '@mui/material'
import { useMemo, useState } from 'react'

import { themeSettings } from '../contexts/theme/theme-settings'
import { themeTypes } from '../contexts/theme/theme-types'
import { localStorageTypes } from './local-storage/types'

export const useMode = () => {
	const [mode, setMode] = useState<themeTypes>(
		(localStorage.getItem(localStorageTypes.mode) as themeTypes) || 'blue'
	)

	const setColorMode = (mode: themeTypes) => {
		setMode(mode)
		localStorage.setItem(localStorageTypes.mode, mode)
	}

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

	const getColorMode = () => {
		return mode
	}

	return { theme, setColorMode, getColorMode }
}
