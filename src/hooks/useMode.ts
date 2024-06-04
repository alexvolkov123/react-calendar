import { createTheme } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { themeSettings } from '../contexts/theme/theme.context'
import { createActionChangeMode } from '../store/action-creators/theme'
import { themeTypes } from '../types/theme'
import { useTypedSelector } from './useTypedSelector'

export const useMode = () => {
	const dispatch = useDispatch()
	const { mode } = useTypedSelector(state => state.theme)

	const setColorMode = (mode: themeTypes) => {
		dispatch(createActionChangeMode(mode))
		localStorage.setItem('mode', mode)
	}

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

	function getColorMode() {
		return mode
	}

	return { theme, setColorMode, getColorMode }
}
