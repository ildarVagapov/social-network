import { connect } from 'react-redux'
import { addMassegeActionCreate, updateNewMassegeActionCreator } from '../../redux/reducerDialog'
import Dialog from './Dialog'


let mapStateToProps = (state) => {
	return (
		{
			dialogData: state.dialogPage.dialogData,
			massegeData: state.dialogPage.massegeData,
			newValueTextMassege: state.dialogPage.newValueTextMassege
		}
	)
}
let mapDispatchToProps = (dispatch) => {
	return (
		{
			addMassege: () => { dispatch(addMassegeActionCreate()) },
			updateNewMassege: (text) => { dispatch(updateNewMassegeActionCreator(text)) }
		}
	)
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer