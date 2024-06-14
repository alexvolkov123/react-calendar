import { Circle } from '@mui/icons-material'
import { Button, Grid } from '@mui/material'
import { format, isToday } from 'date-fns'
import { memo, useContext } from 'react'

import { CalendarContext } from '../../../../../contexts/calendar/calendar-context'
import { UserContext } from '../../../../../contexts/user/user.context'
import { useTasks } from '../../../../../hooks/useTasks'
import './item.css'

export const CalendarGridItem = memo(({ day }: { day: Date }) => {
	const { today, setIsEditDialog } = useContext(CalendarContext)
	const { setEditedDay } = useContext(UserContext)

	const { isExistEditedTasks } = useTasks()

	return (
		<Grid item key={day.toISOString()}>
			<Button
				variant='contained'
				className={
					day.getMonth() !== today.getMonth()
						? 'button_not-present-month'
						: isToday(day)
						? 'button_today'
						: ''
				}
				onClick={() => {
					setEditedDay(day)
					setIsEditDialog(true)
				}}
				type='button'
			>
				{format(day, 'd')}
				{isExistEditedTasks(day) && <Circle id='circle' />}
			</Button>
		</Grid>
	)
})
