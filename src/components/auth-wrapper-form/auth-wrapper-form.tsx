import { memo } from 'react'

import { RoutePathsEnum } from '../../routes/types'
import { AuthFormFooter } from './auth-form-footer/auth-form-footer'
import { AuthForm } from './auth-form/auth-form'
import './auth-wrapper-form.css'
import { AuthWrapperTypes } from './auth-wrapper-types'

export const AuthWrapperForm = memo(
	({ title, linkText, isSignUp }: AuthWrapperTypes) => {
		return (
			<div className='page'>
				<div className='wrapper'>
					<AuthForm {...{ title, isSignUp }} />
					<AuthFormFooter
						text={linkText}
						href={isSignUp ? RoutePathsEnum.signIn : RoutePathsEnum.signUp}
						title={title}
					/>
				</div>
			</div>
		)
	}
)
