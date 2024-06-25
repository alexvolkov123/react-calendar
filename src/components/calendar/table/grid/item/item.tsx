import { Circle } from '@mui/icons-material'
import { Button, Grid } from '@mui/material'
import { format, isToday } from 'date-fns'
import { memo, useContext, useMemo } from 'react'

import { CalendarContext } from '../../../../../contexts/calendar/calendar-context'
import { useTasks } from '../../../../../hooks/useTasks'
import './item.css'

export const CalendarGridItem = memo(({ day }: { day: Date }) => {
	const { today, setIsEditDialog, setEditedDay } = useContext(CalendarContext)

	const { isExistEditedTasks } = useTasks()

	const buttonClass = useMemo(
		() =>
			day.getMonth() !== today.getMonth()
				? 'button_not-present-month'
				: isToday(day)
				? 'button_today'
				: '',
		[day, today]
	)

	const handleButtonClick = () => {
		setEditedDay(day)
		setIsEditDialog(true)
	}

	return (
		<Grid item>
			<Button
				variant='contained'
				className={buttonClass}
				onClick={handleButtonClick}
				type='button'
			>
				{format(day, 'd')}
				{isExistEditedTasks(day) && <Circle id='circle' />}
			</Button>
		</Grid>
	)
})
