import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
	return (
		<div className={s.content}>
			<ProfileInfo />
			<MyPosts
				postsData={props.postsData}
				newValueText={props.newValueText}
				dispatch={props.dispatch}
			/>
		</div>
	)
}

export default Profile