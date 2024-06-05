import { createTheme } from '@mui/material'
import { useMemo } from 'react'
import { themeSettings } from '../contexts/theme/theme.context'
import { themeTypes } from '../types/theme'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export const useMode = () => {
	const { ChangeMode } = useActions()
	const { mode } = useTypedSelector(state => state.theme)

	const setColorMode = (mode: themeTypes) => {
		ChangeMode(mode)
		localStorage.setItem('mode', mode)
	}

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

	function getColorMode() {
		return mode
	}

	return { theme, setColorMode, getColorMode }
}
