import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreate } from '../../../redax/reducerProfile'
import StoreContext from '../../../storeContex'


const MyPostsContainer = () => {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState()
					let addPost = () => {
						store.dispatch(addPostActionCreator())
					}
					let addOnChange = (text) => {
						store.dispatch(updateNewPostTextActionCreate(text))
					}
					return (
						<MyPosts
							updateNewPostText={addOnChange}
							addPost={addPost}
							postsData={state.profilePage.post}
							newValueText={state.profilePage.newValueText}
						/>
					)
				}
			}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer