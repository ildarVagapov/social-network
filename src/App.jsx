import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import DialogContainer from './components/Dialog/DialogContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UserContainer from './components/User/UserContainer';
import './App.css';

function App() {
	return (
		<div className="app-wrapper" >
			<Header />
			<NavbarContainer />
			<Routes>
				<Route path='/profile' element={<ProfileContainer />} />
				<Route path='/dialog/*' element={<DialogContainer />} />
				<Route path='/user' element={<UserContainer />} />
			</Routes>
		</div >
	);
}

const dd = () => {
	<div>

	</div>
}

export default App;
