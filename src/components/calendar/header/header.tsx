import { Container } from '@mui/material'
import { memo, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../../../contexts/user/user.context'
import { RoutePathsEnum } from '../../../routes/types'
import { notify } from '../../../utils/notify/notify'
import { BaseButton } from '../../ui/base-button/base-button'
import './header.css'

export const CalendarHeader = memo(() => {
	const { removeUser } = useContext(UserContext)
	const navigate = useNavigate()

	const logout = useCallback((): void => {
		removeUser()
		notify('You are logged out')
		navigate(RoutePathsEnum.signIn)
	}, [navigate, removeUser])

	return (
		<Container className='header' id='header'>
			<div className='header__title'>Calendar Application</div>
			<div className='header__button'>
				<BaseButton buttonText='Logout' variant='outlined' onClick={logout} />
			</div>
		</Container>
	)
})
