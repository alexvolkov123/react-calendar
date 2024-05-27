import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer, Zoom } from 'react-toastify'
import { Context } from './context'
import { router } from './router'
import { ITask, IUser } from './types/types'

export default function App() {
	const defaultUser = {
		id: '',
		username: '',
		email: '',
		password: '',
		tasks: [],
	}
	const [user, setUser] = useState<IUser>(defaultUser)

	const removeUser = () => {
		setUser(defaultUser)
	}
	const addUser = (user: IUser) => {
		localStorage.setItem(user.email, JSON.stringify({ ...user, tasks: [] }))
		setUser(user)
	}
	const getUser = () => {
		return user
	}
	const getUserTasks = () => {
		return user.tasks
	}
	const setUserTasks = (tasks: ITask[]) => {
		localStorage.setItem(user.email, JSON.stringify({ ...user, tasks }))
		setUser({ ...user, tasks })
	}
	const getIsLoggedIn = () => {
		return JSON.parse(localStorage.getItem('isLoggedIn')!)
	}
	const setIsLoggedIn = (value: boolean) => {
		localStorage.setItem('isLoggedIn', JSON.stringify(value))
	}

	return (
		<Context.Provider
			value={{
				removeUser,
				addUser,
				getUser,
				getUserTasks,
				setUserTasks,
				getIsLoggedIn,
				setIsLoggedIn,
			}}
		>
			<RouterProvider router={router} />
			<ToastContainer
				position={'bottom-right'}
				autoClose={3}
				hideProgressBar={false}
				closeOnClick={true}
				pauseOnHover={true}
				draggable={true}
				theme={'light'}
				transition={Zoom}
			/>
		</Context.Provider>
	)
}
