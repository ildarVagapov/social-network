const CLICK_NAV = 'CLICK_NAV'

let initialState = {
	sidebarData: [
		{ page: 'Profile', to: "/profile" },
		{ page: 'Masseges', to: "/dialog" },
		{ page: 'User', to: "/user" },
	]
}
const reducerSidebar = (state = initialState) => {
	// return {
	// 	sidebarData: [...state.sidebarData]
	// }
	return state
}
export { reducerSidebar }