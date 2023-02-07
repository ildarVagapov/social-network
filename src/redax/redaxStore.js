import { combineReducers, legacy_createStore } from "redux"
import { reducerDialog } from "./reducerDialog"
import { reducerProfile } from "./reducerProfile"
import { reducerSidebar } from "./reducerSidebar"

let reducers = combineReducers({
	profilePage: reducerProfile,
	dialogPage: reducerDialog,
	sidebarNav: reducerSidebar
})
let store = legacy_createStore(reducers)

export default store