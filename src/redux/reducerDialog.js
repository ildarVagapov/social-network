const ADD_MASSEGE = 'ADD-MASSEGE'
const UPDATE_NEW_MASSEGE_TEXT = 'UPDATE-NEW-MASSEGE-TEXT'

let initialState = {
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
	newValueTextMassege: ' '
}

const reducerDialog = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MASSEGE:
			const newMassege = {
				id: 4,
				massege: state.newValueTextMassege,
			}
			const newDialogItem = {
				id: 4,
				name: 'Ришат'
			}
			return {
				...state,
				massegeData: [...state.massegeData, newMassege],
				dialogData: [...state.dialogData, newDialogItem],
				newValueTextMassege: ''
			}
		case UPDATE_NEW_MASSEGE_TEXT:
			return {
				...state,
				newValueTextMassege: action.newText
			}
		default:
			return state
	}
}


const addMassegeActionCreate = () => {
	return {
		type: ADD_MASSEGE
	}
}
const updateNewMassegeActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MASSEGE_TEXT, newText: text
	}
}

export { updateNewMassegeActionCreator }
export { addMassegeActionCreate }
export { reducerDialog }