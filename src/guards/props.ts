import { ReactElement } from 'react'

import { RoutePaths } from '../routes/types'

export type AuthGuardProps = {
	children: ReactElement
	redirect: RoutePaths
	isInverse?: boolean
}
