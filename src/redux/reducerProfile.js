const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
	post: [
		{ id: '1', massege: 'hi 1', like: '1' },
		{ id: '2', massege: 'hi pidr', like: '10' },
		{ id: '3', massege: 'hi 3', like: '3' },
	],
	newValueText: 'it-kamasutra',
	profile: null
}

const reducerProfile = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 5,
				massege: state.newValueText,
				like: 0
			}
			return {
				...state,
				post: [...state.post, newPost],
				newValueText: ''
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newValueText: action.newText
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default:
			return state
	}
}


const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}
const updateNewPostTextActionCreate = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT, newText: text
	}
}

const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE, profile
	}
}

export { updateNewPostTextActionCreate }
export { addPostActionCreator }
export { reducerProfile }
export { setUserProfile }