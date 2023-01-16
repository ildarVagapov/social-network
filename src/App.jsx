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
				<Route path='/profile' element={<Profile postsData={props.postsData} addPost={props.addPost} />} />
				<Route path='/dialog/*' element={<Dialog dialogData={props.dialogData} massegeData={props.massegeData} />} />
			</Routes>
		</div >
	);
}

export default App;
