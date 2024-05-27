import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../context'
import { notify } from '../../services/notify.service'
import { IUser, notifyTypes } from '../../types/types'
import {
	emailValidation,
	passwordValidation,
	userNameValidation,
} from '../../validation'
import './auth-form.css'

interface IAuthFormType {
	formType: 'login' | 'register'
}

export default function AuthForm({ formType }: IAuthFormType) {
	const navigate = useNavigate()
	const { addUser, setIsLoggedIn } = useContext(Context)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<IUser>({
		mode: 'all',
		shouldFocusError: false,
	})

	function getUserFromStorage(email: string): IUser | null {
		return localStorage.getItem(email)
			? JSON.parse(localStorage.getItem(email)!)
			: null
	}

	const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
		switch (formType) {
			case 'login': {
				const user: IUser = JSON.parse(localStorage.getItem(data.email)!)
				if (!user) {
					notify('User is not found', notifyTypes.error)
				} else if (data.password !== user.password) {
					notify('The password doesn`t match', notifyTypes.error)
				} else {
					addUser(user)
					setIsLoggedIn(true)
					navigate('/calendar')
					notify('You are logged in', notifyTypes.success)
				}
				break
			}
			case 'register': {
				if (getUserFromStorage(data.email)) {
					notify(
						'An account with the same email address already exists',
						notifyTypes.error
					)
				} else {
					addUser({ ...data, tasks: [] })
					setIsLoggedIn(true)
					notify('You are registered', notifyTypes.success)
					navigate('/calendar')
				}
				break
			}
		}
		reset()
	}

	return (
		<div className='page'>
			<div className='wrapper'>
				<form onSubmit={handleSubmit(onSubmit)} className='wrapper-form'>
					<Stack spacing={3} alignItems={'center'}>
						<Typography fontSize={20} color='primary'>
							{formType === 'login' ? 'Sign In' : 'Sign Up'}
						</Typography>
						{formType === 'register' && (
							<TextField
								{...register('username', userNameValidation)}
								label='Username'
								variant='outlined'
								error={!!errors.username}
								helperText={errors.username?.message}
							/>
						)}
						<TextField
							{...register('email', emailValidation)}
							label='Email'
							variant='outlined'
							error={!!errors.email}
							helperText={errors.email?.message}
						/>
						<TextField
							{...register('password', passwordValidation)}
							type='password'
							label='Password'
							variant='outlined'
							error={!!errors.password}
							helperText={errors.password?.message}
						/>

						<Button disabled={!isValid} variant='contained' type='submit'>
							Access
						</Button>
					</Stack>
				</form>

				{formType === 'login' ? (
					<Typography className='wrapper-link'>
						Don't have an account? Try to{' '}
						<Link color='#701c1c' fontWeight={900} href='/register'>
							Sign-Up!
						</Link>
					</Typography>
				) : (
					<Typography className='wrapper-link'>
						Have you an account?{' '}
						<Link color='#701c1c' fontWeight={900} href='/login'>
							Sign-In!
						</Link>
					</Typography>
				)}
			</div>
		</div>
	)
}
