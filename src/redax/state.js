import { reducerDialog } from "./reducerDialog"
import { reducerProfile } from "./reducerProfile"



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
		this._state.pofilePage = reducerProfile(this._state.pofilePage, action)
		this._state.dialogPage = reducerDialog(this._state.dialogPage, action)
		this._callSubscriber(this._state)
	}
}

export default store
