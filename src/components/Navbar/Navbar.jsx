import s from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props) => {
	const navbarItem = props.navbarData.map((n, i) => {
		return (
			<NavbarItem key={i} page={n.page} to={n.to} />
		)
	})

	return (
		<nav className={s.nav} >
			{navbarItem}
		</nav >
	)
}

export default Navbar;