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
	const addMassege = () => {
		const text = addMassegeLink.current.value
		alert(text)
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
				<textarea ref={addMassegeLink}></textarea>
				<button onClick={addMassege} >add Massege</button>
			</div>
		</div >

	)
}

export default Dialog