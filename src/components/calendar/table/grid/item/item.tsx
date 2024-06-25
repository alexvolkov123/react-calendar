import { Circle } from '@mui/icons-material'
import { Grid } from '@mui/material'
import { format, isToday } from 'date-fns'
import { memo, useContext, useMemo } from 'react'

import { CalendarContext } from '../../../../../contexts/calendar/calendar-context'
import { useTasks } from '../../../../../hooks/useTasks'
import { BaseButton } from '../../../../ui/base-button/base-button'
import './item.css'

export const CalendarGridItem = memo(({ day }: { day: Date }) => {
	const { today, setIsEditDialog, setEditedDay } = useContext(CalendarContext)

	const { isExistEditedTasks } = useTasks()

	const buttonId = useMemo(
		() =>
			day.getMonth() !== today.getMonth()
				? 'calendar-button_not-present-month'
				: isToday(day)
				? 'calendar-button_today'
				: 'calendar-button',
		[day, today]
	)

	const handleButtonClick = () => {
		setEditedDay(day)
		setIsEditDialog(true)
	}

	return (
		<Grid item>
			<BaseButton
				buttonText={format(day, 'd')}
				onClick={handleButtonClick}
				id={buttonId}
			>
				{isExistEditedTasks(day) ? <Circle id='circle' /> : <></>}
			</BaseButton>
		</Grid>
	)
})
