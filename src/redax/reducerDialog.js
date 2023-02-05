const ADD_MASSEGE = 'ADD-MASSEGE'
const UPDATE_NEW_MASSEGE_TEXT = 'UPDATE-NEW-MASSEGE-TEXT'


const reducerDialog = (state, action) => {
	if (action.type === ADD_MASSEGE) {
		const newMassege = {
			id: 4,
			massege: state.newValueTextMassege,
		}
		const newDialogItem = {
			id: 4,
			name: 'Ришат'
		}
		state.massegeData.push(newMassege)
		state.dialogData.push(newDialogItem)
		state.newValueTextMassege = ''
	} else if (action.type === UPDATE_NEW_MASSEGE_TEXT) {
		state.newValueTextMassege = action.newText
	}
	return state
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