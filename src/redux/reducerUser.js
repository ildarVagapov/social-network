const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET-USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 4
}

const reducerUser = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: true }
					}
					return user
				})
			}
		case UNFOLLOW:
			{
				let copyState = { ...state }
				copyState.users = state.users.map(user => {
					if (user.id === action.userId) {
						let copyUser = { ...user, followed: false }
						return copyUser
					}
					return user
				})
				return copyState
			}
		case SET_USER:
			return {
				...state,
				users: action.user
				// users: 
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count
			}
		default:
			return state
	}
}

export const followAC = (userId) => {
	return (
		{ type: FOLLOW, userId }
	)
}
export const unfollowAC = (userId) => {
	return (
		{ type: UNFOLLOW, userId }
	)
}
export const setUsersAC = (user) => {
	return (
		{ type: SET_USER, user }
	)
}
export const setCurrentPageAC = (currentPage) => {
	return (
		{ type: SET_CURRENT_PAGE, currentPage }
	)
}
export const setTotalUsersCountAC = (totalUsersCount) => {
	return (
		{ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }
	)
}


export { reducerUser }