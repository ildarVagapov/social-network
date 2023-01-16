import { rerenderEntireTree } from "../render"

let state = {
	pofilePage: {
		post: [
			{ id: '1', massege: 'hi 1', like: '1' },
			{ id: '2', massege: 'hi pidr', like: '10' },
			{ id: '3', massege: 'hi 3', like: '3' },
		]
	},
	dialogPage: {
		dialogData: [
			{ id: '1', name: 'Ришат' },
			{ id: '2', name: 'Фунай' },
			{ id: '3', name: 'Рифат' }
		],
		massegeData: [
			{ id: '1', massege: 'hi 1' },
			{ id: '2', massege: 'hi 2' },
			{ id: '3', massege: 'hi 3' }
		]
	},
	sidebarData: [
		{ page: 'Profile', to: "/profile" },
		{ page: 'Masseges', to: "/dialog" },
		{ page: 'J', to: "" },
		{ page: 'S', to: "" },
	]
}

const addPost = (newPostText) => {
	const newPost = {
		id: 5,
		massege: newPostText,
		like: 0
	}
	state.pofilePage.post.push(newPost)
	rerenderEntireTree(state)
}

export { addPost }
export default state