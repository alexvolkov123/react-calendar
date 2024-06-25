import { AuthWrapperForm } from '../../components/auth-wrapper-form/auth-wrapper-form'

export const AuthPage = ({ isSignIn }: { isSignIn: boolean }) => {
	return isSignIn ? (
		<AuthWrapperForm
			linkText='Don`t have an account? Try to'
			isSignUp={false}
			title='Sign In'
		/>
	) : (
		<AuthWrapperForm
			linkText='Have you an account?'
			isSignUp={true}
			title='Sign Up'
		/>
	)
}
