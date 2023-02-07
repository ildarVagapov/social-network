const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	post: [
		{ id: '1', massege: 'hi 1', like: '1' },
		{ id: '2', massege: 'hi pidr', like: '10' },
		{ id: '3', massege: 'hi 3', like: '3' },
	],
	newValueText: 'it-kamasutra'
}

const reducerProfile = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 5,
				massege: state.newValueText,
				like: 0
			}
			state.post.push(newPost)
			state.newValueText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newValueText = action.newText
			return state
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

export { updateNewPostTextActionCreate }
export { addPostActionCreator }
export { reducerProfile }