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
