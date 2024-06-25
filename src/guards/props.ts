import { ReactElement } from 'react'

import { RoutePathsEnum } from '../routes/types'

export type AuthGuardProps = {
	children: ReactElement
	redirect: RoutePathsEnum
	isInverse?: boolean
}
