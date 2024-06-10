import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { add, sub } from 'date-fns'
import { useContext } from 'react'

import { CalendarContext } from '../../../contexts/calendar/calendar-context'
import './year-select.css'

export const YearSelect = () => {
	const { today, setToday } = useContext(CalendarContext)

	const handleChangeYear = (addYear: boolean) => {
		addYear
			? setToday(add(today, { years: 1 }))
			: setToday(sub(today, { years: 1 }))
	}

	return (
		<div className='year-select'>
			<IconButton onClick={() => handleChangeYear(false)}>
				<ArrowLeft className='year-select__item' />
			</IconButton>
			<Typography className='year-select__item'>
				{today.getFullYear()}
			</Typography>
			<IconButton onClick={() => handleChangeYear(true)}>
				<ArrowRight className='year-select__item' />
			</IconButton>
		</div>
	)
}
