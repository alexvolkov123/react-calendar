import { Button, Grid, Link, MenuItem, Select } from '@mui/material'
import {
	eachDayOfInterval,
	eachMonthOfInterval,
	endOfMonth,
	endOfWeek,
	endOfYear,
	format,
	setDefaultOptions,
	startOfMonth,
	startOfToday,
	startOfWeek,
	startOfYear,
} from 'date-fns'

import { useState } from 'react'
import './calendar.css'

setDefaultOptions({ weekStartsOn: 1 })

export default function Calendar() {
	const [today, setToday] = useState(startOfToday())

	function getDays() {
		return eachDayOfInterval({
			start: startOfWeek(startOfMonth(today)),
			end: endOfWeek(endOfMonth(today)),
		})
	}

	function getMonths() {
		return eachMonthOfInterval({
			start: startOfYear(today),
			end: endOfYear(today),
		})
	}

	function handleChangeMonth(startOfMonth: Date) {
		setToday(startOfMonth)
	}

	return (
		<div className='calendar'>
			<div className='calendar-header'>
				<div className='calendar-header__title'>Calendar Application</div>
				<div className='calendar-header__button'>
					<Link href='/login'>
						<Button variant='outlined'>Logout</Button>
					</Link>
				</div>
			</div>
			<div className='calendar-body'>
				<div className='calendar-body__months'>
					<Select
						value={today.toISOString()}
						placeholder={format(today, 'MMMM')}
						onChange={e => handleChangeMonth(new Date(e.target.value))}
					>
						{getMonths().map((month, index) => (
							<MenuItem value={month.toISOString()} key={index}>
								{format(month, 'MMMM')}
							</MenuItem>
						))}
					</Select>
				</div>
				<div className='calendar-body__grid'>
					<Grid
						container
						direction={'row'}
						spacing={1}
						columns={7}
						gridTemplateRows={6}
					>
						{getDays().map((day, index) => (
							<Grid item key={index}>
								{day.getMonth() !== today.getMonth() ? (
									<Button
										variant='contained'
										className='notPresentMonth'
										type='button'
									>
										{format(day, 'd')}
									</Button>
								) : (
									<Button variant='contained' type='button'>
										{format(day, 'd')}
									</Button>
								)}
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</div>
	)
}
