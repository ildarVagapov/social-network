import s from './../Dialog.module.css'

const MassegeItem = (props) => {
	return (
		<>
			<div className={s.massege__item}>
				{props.massege}
			</div>
		</>
	)
}

export default MassegeItem