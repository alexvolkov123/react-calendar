import { memo, useContext } from 'react'

import { CalendarContext } from '../../../contexts/calendar/calendar-context'
import { BaseButton } from '../../ui/base-button/base-button'

export const CalendarButtonCreateTask = memo(() => {
	const { setOpenCreateDialog } = useContext(CalendarContext)

	return (
		<BaseButton
			buttonText='+'
			id='createTask'
			onClick={() => setOpenCreateDialog(true)}
		/>
	)
})
