import { NavLink } from 'react-router-dom'
import s from './../Dialog.module.css'

const DialogItem = (props) => {
	let path = '/dialog/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path} >{props.name}</NavLink>
		</div>
	)
}


export default DialogItem