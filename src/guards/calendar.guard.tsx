import { Navigate } from 'react-router-dom'

import Calendar from '../pages/calendar/calendar'

export default function CalendarGuard() {
	return (
		<>
			{localStorage.getItem('currentUser') ? (
				<Calendar />
			) : (
				<Navigate to={'/login'} />
			)}
		</>
	)
}
