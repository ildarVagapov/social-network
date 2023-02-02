import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
	return (
		<div className={s.content}>
			<ProfileInfo />
			<MyPosts
				updateNewPostText={props.updateNewPostText}
				postsData={props.postsData}
				addPost={props.addPost}
				newValueText={props.newValueText}
			/>
		</div>
	)
}

export default Profile