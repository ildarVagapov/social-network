import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';

function App(props) {
	return (
		<div className="app-wrapper" >
			<Header />
			<Navbar navbarData={props.navbarData} />
			<Routes>
				<Route
					path='/profile'
					element={
						<Profile
							postsData={props.postsData}
							newValueText={props.newValueText}
							dispatch={props.dispatch}
						/>}
				/>
				<Route
					path='/dialog/*'
					element={
						<Dialog
							dialogData={props.dialogData}
							massegeData={props.massegeData}
							dispatch={props.dispatch}
							newValueTextMassege={props.newValueTextMassege}
						/>}
				/>
			</Routes>
		</div >
	);
}

export default App;
