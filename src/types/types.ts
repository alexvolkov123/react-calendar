export type IUser = {
	username: string
	email: string
	password: string
	tasks: ITask[]
}

export type ITask = {
	id: string
	title: string
	date: Date
	description?: string
}
