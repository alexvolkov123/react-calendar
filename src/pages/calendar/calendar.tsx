import { Button, Grid, Link } from '@mui/material'
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	setDefaultOptions,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from 'date-fns'

import { useState } from 'react'
import MonthSelect from '../../components/month-select/month-select'
import YearSelect from '../../components/year-select/year-select'
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
				<div className='calendar-body__options'>
					<YearSelect today={today} setToday={setToday} />
					<MonthSelect today={today} setToday={setToday} />
				</div>
				<div>
					<Grid
						className='calendar-body__grid'
						container
						direction={'row'}
						spacing={2}
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
