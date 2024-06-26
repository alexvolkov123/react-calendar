import { Theme, createTheme } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { themeSettings } from '../contexts/theme/theme-settings'
import { ThemeTypes } from '../contexts/theme/theme-types'
import { LocalStorageFieldsEnum } from './local-storage/types'

export const useMode = () => {
	const [mode, setMode] = useState<ThemeTypes>('blue')

	const getModeFromStorage = useCallback(
		() => (localStorage.getItem('mode') || 'blue') as ThemeTypes,
		[]
	)

	useEffect(() => setMode(getModeFromStorage()), [getModeFromStorage])

	const setColorMode = useCallback((mode: ThemeTypes): void => {
		setMode(mode)
		localStorage.setItem(LocalStorageFieldsEnum.mode, mode)
	}, [])

	const theme = useMemo((): Theme => createTheme(themeSettings(mode)), [mode])

	return { theme, setColorMode, mode }
}
