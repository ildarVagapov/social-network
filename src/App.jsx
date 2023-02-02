import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';

function App(props) {
	debugger

	return (
		<div className="app-wrapper" >
			<Header />
			<Navbar navbarData={props.navbarData} />
			<Routes>
				<Route
					path='/profile'
					element={
						<Profile
							updateNewPostText={props.updateNewPostText}
							postsData={props.postsData}
							addPost={props.addPost}
							newValueText={props.newValueText}
						/>}
				/>
				<Route
					path='/dialog/*'
					element={
						<Dialog
							updateNewMassegeText={props.updateNewMassegeText}
							newValueTextMassege={props.newValueTextMassege}
							addMassege={props.addMassege}
							dialogData={props.dialogData}
							massegeData={props.massegeData}
						/>}
				/>
			</Routes>
		</div >
	);
}

export default App;
