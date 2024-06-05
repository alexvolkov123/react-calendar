import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ChangeMode } from '../store/action-creators/theme'
import { AddUser, SetUserTasks } from '../store/action-creators/user'

const rootActions = {
	AddUser,
	SetUserTasks,
	ChangeMode,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
