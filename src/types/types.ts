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
	setTasks: any
	open: boolean
	onClose: () => void
}

export interface UserContext {
	removeUser: () => void
	addUser: (user: IUser) => void
	getUser: () => IUser
	getUserTasks: () => ITask[] | []
	setUserTasks: (tasks: ITask[]) => void
	getIsLoggedIn: () => boolean
	setIsLoggedIn: (value: boolean) => void
}
