import { Button } from '@mui/material'
import { useContext } from 'react'

import { CalendarContext } from '../../../contexts/calendar/calendar-context'
import './button-create-task.css'

export const CalendarButtonCreateTask = () => {
	const { setIsCreateDialog } = useContext(CalendarContext)

	return (
		<Button
			id='createTask'
			className='button'
			onClick={() => setIsCreateDialog(true)}
		>
			+
		</Button>
	)
}
