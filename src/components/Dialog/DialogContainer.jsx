import { addMassegeActionCreate, updateNewMassegeActionCreator } from '../../redax/reducerDialog'
import StoreContext from '../../storeContex'
import Dialog from './Dialog'

const DialogContainer = () => {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState()
					const addBtnMassege = () => {
						store.dispatch(addMassegeActionCreate())
					}
					const addOnChange = (text) => {
						store.dispatch(updateNewMassegeActionCreator(text))
					}
					return (
						<Dialog
							addMassege={addBtnMassege}
							updateNewMassege={addOnChange}
							dialogData={state.dialogPage.dialogData}
							massegeData={state.dialogPage.massegeData}
							newValueTextMassege={state.dialogPage.newValueTextMassege}
						/>
					)
				}
			}
		</StoreContext.Consumer>
	)
}

export default DialogContainer