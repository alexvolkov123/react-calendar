import { memo } from 'react'

import { AuthFormFooter } from './auth-form-footer/auth-form-footer'
import { AuthForm } from './auth-form/auth-form'
import './auth-wrapper-form.css'
import { AuthWrapperTypes } from './auth-wrapper-types'

export const AuthWrapperForm = memo(
	({ title, inputs, onSubmit, link }: AuthWrapperTypes) => {
		return (
			<div className='page'>
				<div className='wrapper'>
					<AuthForm {...{ title, inputs, onSubmit }} />
					<AuthFormFooter {...link} />
				</div>
			</div>
		)
	}
)
