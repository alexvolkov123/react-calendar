import { AuthWrapperForm } from '../../components/auth-wrapper-form/auth-wrapper-form'
import { useAuth } from '../../hooks/useAuth'
import { RoutePathsEnum } from '../../routes/types'

export const SignInPage = () => {
	const { signInInputs, signIn } = useAuth()
	return (
		<AuthWrapperForm
			title='Sign In'
			inputs={signInInputs}
			onSubmit={signIn}
			link={{
				text: 'Don`t have an account? Try to',
				path: RoutePathsEnum.signUp,
				label: 'Sign Up',
			}}
		/>
	)
}
