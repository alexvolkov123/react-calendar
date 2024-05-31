export interface ISelect {
	today: Date
	setToday: any
}

export interface IUser {
	username: string
	email: string
	password: string
	tasks: ITask[]
}

export interface ITask {
	id: string
	title: string
	date: Date
	description?: string
}

export interface ICreateDialogProps {
	open: boolean
	onClose: (value?: ITask) => void
}

export interface IEditDialogProps {
	tasks: ITask[]
	open: boolean
	onClose: () => void
}

export interface IUserContext {
	removeUser: () => void
	addUser: (email: string) => void
	registerUser: (user: IUser) => void
	getUserTasks: () => ITask[]
	setUserTasks: (tasks: ITask[]) => void
	isUserExist: (email: string) => boolean
	isPasswordMatch: (user: IUser) => boolean
}

export const notifyTypes = {
	error: 'error',
	success: 'success',
}
export type themeTypes = 'blue' | 'yellow' | 'black'
export interface IThemeContext {
	setColorMode: (mode: themeTypes) => void
	getColorMode: () => themeTypes
}
