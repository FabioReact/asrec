export type User = {
	id: number
	email: string
	password: string
}

export type UserRequest = {
	email: string
	password: string
}

export type UserResponse = {
	accessToken: string
	user: User
}
