import { combineReducers, legacy_createStore } from "redux"
import { reducerDialog } from "./reducerDialog"
import { reducerProfile } from "./reducerProfile"
import { reducerSidebar } from "./reducerSidebar"
import { reducerUser } from "./reducerUser"

let reducers = combineReducers({
	profilePage: reducerProfile,
	dialogPage: reducerDialog,
	usersPage: reducerUser,
	sidebarNav: reducerSidebar
})
let store = legacy_createStore(reducers)

export default store