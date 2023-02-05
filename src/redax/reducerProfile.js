const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const reducerProfile = (state, action) => {
	if (action.type === ADD_POST) {
		const newPost = {
			id: 5,
			massege: state.newValueText,
			like: 0
		}
		state.post.push(newPost)
		state.newValueText = ''
	} else if (action.type === UPDATE_NEW_POST_TEXT) {
		state.newValueText = action.newText
	}
	return state
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