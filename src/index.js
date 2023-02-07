import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redax/redaxStore';
// import store from './redax/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
	debugger
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					navbarData={state.sidebarNav.sidebarData}
					postsData={state.profilePage.post}
					dialogData={state.dialogPage.dialogData}
					massegeData={state.dialogPage.massegeData}
					newValueText={state.profilePage.newValueText}
					newValueTextMassege={state.dialogPage.newValueTextMassege}
					dispatch={store.dispatch.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state)
})

// команды git
// git add .
// git commit -m 'fixed'
// git push