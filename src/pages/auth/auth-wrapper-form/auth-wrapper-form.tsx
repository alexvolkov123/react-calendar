import { Routes } from '../../../routes/routes'
import { AuthFormFooter } from './auth-form-footer/auth-form-footer'
import { AuthForm } from './auth-form/auth-form'
import './auth-wrapper-form.css'
import { AuthWrapperTypes } from './auth-wrapper-types'

export const AuthWrapperForm = ({
	title,
	linkText,
	isSignUp,
}: AuthWrapperTypes) => {
	return (
		<div className='page'>
			<div className='wrapper'>
				<AuthForm {...{ title, isSignUp }} />
				<AuthFormFooter
					text={linkText}
					href={isSignUp ? Routes.signIn : Routes.signUp}
					linkValue={title}
				/>
			</div>
		</div>
	)
}
