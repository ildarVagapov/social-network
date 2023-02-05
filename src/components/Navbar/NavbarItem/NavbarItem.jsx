import { NavLink } from 'react-router-dom';
import s from './NavbarItem.module.css'
const activeLink = (data) => data.isActive ? s.active : '';


const NavbarItem = (props) => {
	return (
		<div >
			<NavLink className={activeLink} to={props.to}>{props.page}</NavLink>
		</div>
	)
}

export default NavbarItem;