import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreate } from '../../../redux/reducerProfile'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return (
		{
			postsData: state.profilePage.post,
			newValueText: state.profilePage.newValueText
		}
	)
}
let mapDispatchToProps = (dispatch) => {
	return (
		{
			updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreate(text)) },
			addPost: () => { dispatch(addPostActionCreator()) }
		}
	)
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer