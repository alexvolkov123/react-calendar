import { memo } from 'react'

import { BaseButton } from '../base-button/base-button'
import { FormButtonProps } from './props'

export const FormButton = memo(({ id, label, disabled }: FormButtonProps) => {
	return (
		<BaseButton buttonText={label} disabled={disabled} id={id} type='submit' />
	)
})
