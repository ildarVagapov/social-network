import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redax/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					navbarData={state.sidebarData}
					postsData={state.pofilePage.post}
					dialogData={state.dialogPage.dialogData}
					massegeData={state.dialogPage.massegeData}
					newValueText={state.pofilePage.newValueText}
					newValueTextMassege={state.dialogPage.newValueTextMassege}
					addPost={store.addPost.bind(store)}
					addMassege={store.addMassege.bind(store)}
					updateNewPostText={store.updateNewPostText.bind(store)}
					updateNewMassegeText={store.updateNewMassegeText.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
