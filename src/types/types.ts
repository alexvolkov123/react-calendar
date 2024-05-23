export interface ISelect {
	today: Date
	setToday: any
}

export interface IUser {
	id: string
	username: string
	email: string
	password: string
	tasks?: ITask[]
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
