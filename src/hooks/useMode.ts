import { Theme, createTheme } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { themeSettings } from '../contexts/theme/theme-settings'
import { ThemeTypes } from '../contexts/theme/theme-types'
import { LocalStorageFieldsEnum } from './local-storage/types'
import { useLocalStorage } from './local-storage/useLocalStorage'

export const useMode = () => {
	const { getModeFromStorage } = useLocalStorage()

	const [mode, setMode] = useState<ThemeTypes>('blue')
	useEffect(() => setMode(getModeFromStorage), [getModeFromStorage])

	const setColorMode = useCallback((mode: ThemeTypes): void => {
		setMode(mode)
		localStorage.setItem(LocalStorageFieldsEnum.mode, mode)
	}, [])

	const theme = useMemo((): Theme => createTheme(themeSettings(mode)), [mode])

	return { theme, setColorMode, mode }
}
