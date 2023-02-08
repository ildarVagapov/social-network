import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogContainer from './components/Dialog/DialogContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="app-wrapper" >
			<Header />
			<NavbarContainer />
			<Routes>
				<Route path='/profile' element={<Profile />} />
				<Route path='/dialog/*' element={<DialogContainer />} />
			</Routes>
		</div >
	);
}

export default App;
