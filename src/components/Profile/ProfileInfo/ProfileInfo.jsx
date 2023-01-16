import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div className={s.ProfileInfo}>
			<div>
				<img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/d/df/Open_sea_%28july_2021%29.jpg" alt="" />
			</div>
			<div>
				ava + des
			</div>
		</div>
	)
}

export default ProfileInfo