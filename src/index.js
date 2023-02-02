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
					dispatch={store.dispatch.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

// команды git
// git add .
// git commit -m 'fixed'
// git push