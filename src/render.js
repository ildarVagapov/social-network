import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redax/state';

let rerenderEntireTree = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					postsData={state.pofilePage.post}
					dialogData={state.dialogPage.dialogData}
					massegeData={state.dialogPage.massegeData}
					navbarData={state.sidebarData}
					addPost={addPost}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export { rerenderEntireTree }