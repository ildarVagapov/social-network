import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
	return (
		{
			navbarData: state.sidebarNav.sidebarData
		}
	)
}


const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer