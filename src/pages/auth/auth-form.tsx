import { SubmitHandler, useForm } from 'react-hook-form'
import './auth-form.css'

import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import {
	emailValidation,
	passwordValidation,
	userNameValidation,
} from '../../validation'

interface IAuthForm {
	userName: string
	email: string
	password: string
}

interface IAuthFormType {
	formType: 'login' | 'register'
}

export default function AuthForm({ formType }: IAuthFormType) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IAuthForm>({
		mode: 'all',
		shouldFocusError: false,
	})

	const onSubmit: SubmitHandler<IAuthForm> = (data: IAuthForm) => {
		console.log(data)
	}

	return (
		<div className='page'>
			<div className='wrapper'>
				<form onSubmit={handleSubmit(onSubmit)} className='wrapper-form'>
					<Stack spacing={3} alignItems={'center'}>
						<Typography fontSize={20} color='primary'>
							{formType === 'login' ? 'Sign In' : 'Sign Up'}
						</Typography>
						{formType === 'login' && (
							<TextField
								{...register('userName', userNameValidation)}
								label='Username'
								variant='outlined'
								error={!!errors.userName}
								helperText={errors.userName?.message}
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
