import StoreContext from '../../storeContex';
import Navbar from './Navbar';

const NavbarContainer = () => {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState()
					return (
						<Navbar navbarData={state.sidebarNav.sidebarData} />
					)
				}
			}
		</StoreContext.Consumer>
	)
}

export default NavbarContainer