import { Circle } from '@mui/icons-material'
import { Button, Grid } from '@mui/material'
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
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MonthSelect from '../../components/month-select/month-select'
import { CreateDialog } from '../../components/popup/create/create.dialog'
import { EditDialog } from '../../components/popup/edit/edit.dialog'
import YearSelect from '../../components/year-select/year-select'
import { Context } from '../../context'
import { ITask } from '../../types/types'
import './calendar.css'

setDefaultOptions({ weekStartsOn: 1 })

export default function Calendar() {
	const { setUserTasks, setIsLoggedIn, getUserTasks } = useContext(Context)
	const navigate = useNavigate()

	const [isCreateDialog, setIsCreateDialog] = useState(false)
	const [isEditDialog, setIsEditDialog] = useState(false)

	const [today, setToday] = useState(startOfToday())

	function getDays() {
		return eachDayOfInterval({
			start: startOfWeek(startOfMonth(today)),
			end: endOfWeek(endOfMonth(today)),
		})
	}

	function isExistEditedTasks(day: Date) {
		if (getUserTasks()) {
			console.log(getUserTasks())

			return (
				getUserTasks().filter(
					task => format(task.date, 'yyyy MM dd') === format(day, 'yyyy MM dd')
				).length > 0
			)
		}
		return false
	}

	function closeCreateDialog(task?: ITask) {
		setIsCreateDialog(false)
		task && setUserTasks([...getUserTasks(), task])
	}

	function logout() {
		setIsLoggedIn(false)
		navigate('/login')
	}

	return (
		<div className='calendar'>
			<div className='calendar-header'>
				<div className='calendar-header__title'>Calendar Application</div>
				<div className='calendar-header__button'>
					<Button variant='outlined' onClick={() => logout()}>
						Logout
					</Button>
				</div>
			</div>
			<div className='calendar-body'>
				<div className='calendar-body__wrapper'>
					<div className='calendar-body__options'>
						<YearSelect today={today} setToday={setToday} />
						<MonthSelect today={today} setToday={setToday} />
					</div>
					<Grid
						className='calendar-body__grid'
						container
						direction={'row'}
						spacing={2}
						columns={7}
						gridTemplateRows={6}
					>
						{getDays().map(day => (
							<Grid item key={day.toISOString()}>
								<Button
									variant='contained'
									className={
										day.getMonth() !== today.getMonth()
											? 'not-present-month'
											: ''
									}
									onClick={() => setIsEditDialog(isExistEditedTasks(day))}
									type='button'
								>
									{format(day, 'd')}
									{isExistEditedTasks(day) && <Circle className={'is-tasks'} />}
								</Button>
							</Grid>
						))}
					</Grid>
					<CreateDialog open={isCreateDialog} onClose={closeCreateDialog} />
					<EditDialog
						open={isEditDialog}
						tasks={getUserTasks()}
						setTasks={setUserTasks}
						onClose={() => setIsEditDialog(false)}
					/>
				</div>
				<div className='calendar-body__wrapper'>
					<Button
						className='calendar-body__create-task'
						onClick={() => setIsCreateDialog(!isCreateDialog)}
					>
						+
					</Button>
				</div>
			</div>
		</div>
	)
}
