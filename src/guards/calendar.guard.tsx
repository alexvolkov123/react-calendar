import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { Context } from '../context'
import Calendar from '../pages/calendar/calendar'

export default function CalendarGuard() {
	const { getIsLoggedIn } = useContext(Context)

	return <>{getIsLoggedIn() ? <Calendar /> : <Navigate to={'/login'} />}</>
}
