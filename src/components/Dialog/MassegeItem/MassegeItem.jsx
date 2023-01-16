import s from './../Dialog.module.css'

const MassegeItem = (props) => {
	return (
		<div className={s.massege}>
			{props.massege}
		</div>
	)
}

export default MassegeItem