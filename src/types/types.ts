export type User = {
	username: string
	email: string
	password: string
	tasks: Task[]
}

export type Task = {
	id: string
	title: string
	date: Date
	description?: string
}
