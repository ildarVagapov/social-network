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

	getState() {
		return this._state
	},

	_callSubscriber() {
	},

	addPost() {
		const newPost = {
			id: 5,
			massege: this._state.pofilePage.newValueText,
			like: 0
		}
		this._state.pofilePage.post.push(newPost)
		this._callSubscriber(this._state)
	},

	addMassege() {
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
		this._callSubscriber(this._state)
	},

	updateNewPostText(newText) {
		this._state.pofilePage.newValueText = newText
		this._callSubscriber(this._state)
	},

	updateNewMassegeText(newText) {
		this._state.dialogPage.newValueTextMassege = newText
		this._callSubscriber(this._state)
	},

	subscribe(observer) {
		this._callSubscriber = observer
	}

}

export default store
