import { AuthWrapperForm } from '../../components/auth-wrapper-form/auth-wrapper-form'
import { useAuth } from '../../hooks/useAuth'
import { RoutePathsEnum } from '../../routes/types'

export const SignUpPage = () => {
	const { signUpInputs, signUp } = useAuth()
	return (
		<AuthWrapperForm
			title='Sign Up'
			inputs={signUpInputs}
			onSubmit={signUp}
			link={{
				text: 'Already have an account? Try to',
				path: RoutePathsEnum.signIn,
				label: 'Sign In',
			}}
		/>
	)
}
