import { Button, Container } from '@mui/material'
import { memo, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../../../contexts/user/user.context'
import { Routes } from '../../../routes/routes'
import { notify } from '../../../utils/notify/notify'
import { notifyMessages } from '../../../utils/notify/notify-messages'
import './header.css'

export const CalendarHeader = memo(() => {
	const { removeUser } = useContext(UserContext)
	const navigate = useNavigate()

	const logout = useCallback((): void => {
		removeUser()
		notify(notifyMessages.loggedOut)
		navigate(Routes.signIn)
	}, [navigate, removeUser])

	return (
		<Container className='header' id='header'>
			<div className='header__title'>Calendar Application</div>
			<div className='header__button'>
				<Button variant='outlined' onClick={logout}>
					Logout
				</Button>
			</div>
		</Container>
	)
})
