import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div className={s.ProfileInfo}>
			<div>
				<img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/d/df/Open_sea_%28july_2021%29.jpg" alt="" />
			</div>
			<div>
				<img src={props.profile.photos.large} />
				ava + des
			</div>
		</div>
	)
}

export default ProfileInfo