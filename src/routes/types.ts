export type IsAuthType = {
	redirect: RoutePathsEnum
	isInverse?: boolean
}

export enum RoutePathsEnum {
	root = '/',
	signIn = '/sign-in',
	signUp = '/sign-up',
	calendar = '/calendar',
	notFound = '/*',
}
