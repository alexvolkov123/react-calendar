import { ReactElement } from 'react'

import { Routes } from '../routes/routes'

export type AuthGuardProps = {
	children: ReactElement
	redirect: Routes
	isInverse?: boolean
}
