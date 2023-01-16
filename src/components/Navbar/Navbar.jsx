import s from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props) => {
	const navbarItem = props.navbarData.map((n) => {
		return (
			<NavbarItem page={n.page} to={n.to} />
		)
	})

	return (
		<nav className={s.nav} >
			{navbarItem}
		</nav >
	)
}

export default Navbar;