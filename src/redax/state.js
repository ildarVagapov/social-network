const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MASSEGE = 'ADD-MASSEGE'
const UPDATE_NEW_MASSEGE_TEXT = 'UPDATE-NEW-MASSEGE-TEXT'

let store = {
	_state: {
		pofilePage: {
			post: [
				{ id: '1', massege: 'hi 1', like: '1' },
				{ id: '2', massege: 'hi pidr', like: '10' },
				{ id: '3', massege: 'hi 3', like: '3' },
			],
			newValueText: 'it-kamasutra'
		},
		dialogPage: {
			dialogData: [
				{ id: '1', name: 'Ришат' },
				{ id: '2', name: 'Фунай' },
				{ id: '3', name: 'Рифат' }
			],
			massegeData: [
				{ id: '1', massege: 'чури' },
				{ id: '2', massege: 'hi 2' },
				{ id: '3', massege: 'hi 3' }
			],
			newValueTextMassege: 'it-kamasutra'
		},
		sidebarData: [
			{ page: 'Profile', to: "/profile" },
			{ page: 'Masseges', to: "/dialog" },
			{ page: 'J', to: "" },
			{ page: 'S', to: "" },
		]
	},
	_callSubscriber() {
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	getState() {
		return this._state
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			const newPost = {
				id: 5,
				massege: this._state.pofilePage.newValueText,
				like: 0
			}
			this._state.pofilePage.post.push(newPost)
			this._state.pofilePage.newValueText = ''
			this._callSubscriber(this._state)
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.pofilePage.newValueText = action.newText
			this._callSubscriber(this._state)
		} else if (action.type === ADD_MASSEGE) {
			const newMassege = {
				id: 4,
				massege: this._state.dialogPage.newValueTextMassege,
			}
			const newDialogItem = {
				id: 4,
				name: 'Ришат'
			}
			this._state.dialogPage.massegeData.push(newMassege)
			this._state.dialogPage.dialogData.push(newDialogItem)
			this._state.dialogPage.newValueTextMassege = ''
			this._callSubscriber(this._state)
		} else if (action.type === UPDATE_NEW_MASSEGE_TEXT) {
			this._state.dialogPage.newValueTextMassege = action.newText
			this._callSubscriber(this._state)
		}
	}
}

const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}
const updateNewPostTextActionCreate = () => {
	return {
		type: UPDATE_NEW_POST_TEXT
	}
}
const addMassegeAcrionCreate = () => {
	return {
		type: ADD_MASSEGE
	}
}
const updateNewMassegeActionCreator = () => {
	return {
		type: UPDATE_NEW_MASSEGE_TEXT
	}
}

export { updateNewMassegeActionCreator }
export { updateNewPostTextActionCreate }
export { addMassegeAcrionCreate }
export { addPostActionCreator }
export default store
