import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import MassegeItem from './MassegeItem/MassegeItem'
import s from './Dialog.module.css'


const Dialog = (props) => {
	const dialogElements = props.dialogData.map((d) => {
		return (
			<DialogItem name={d.name} id={d.id} />
		)
	})
	const massegeElements = props.massegeData.map((m) => {
		return (
			<MassegeItem massege={m.massege} />
		)
	})

	const addMassegeLink = React.createRef()
	const addBtnMassege = () => {
		props.addMassege()
	}

	const addOnChange = () => {
		const text = addMassegeLink.current.value
		props.updateNewMassege(text)
	}

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{dialogElements}
			</div>
			<div className={s.masseges}>
				{massegeElements}
			</div>
			<div>
				<textarea onChange={addOnChange} ref={addMassegeLink} value={props.newValueTextMassege}></textarea>
				<button onClick={addBtnMassege}>add Massege</button>
			</div>
		</div >
	)
}

export default Dialog