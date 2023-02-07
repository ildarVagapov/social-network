const CLICK_NAV = 'CLICK_NAV'

let initialState = {
	sidebarData: [
		{ page: 'Profile', to: "/profile" },
		{ page: 'Masseges', to: "/dialog" },
	]
}
const reducerSidebar = (state = initialState) => {
	return state
}
export { reducerSidebar }