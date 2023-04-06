import axios from 'axios'
import s from './User.module.css'

const User = (props) => {
	if (props.usersData.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			debugger
			props.setUser(response.data.items)
			console.log(response)
		})
	}

	return <div className={s.userBody}>
		{
			props.usersData.map((user) => {
				return <div className={s.userWrapper}>
					<div className={s.userInfo}>
						<img src={
							user.photos.small != null ? user.photos.small
								: 'https://sun9-west.userapi.com/sun9-66/s/v1/ig2/PaW15cxZ95bNMkARIWRNH0Rvl4q1DOtmm9Zfdn2dk5qiVOtuI_TI7XOsQ7EpTuffyNuuSlSGlqrWq7A3EvNki2kq.jpg?size=1440x1919&quality=95&type=albumuserIcon'}
						/>
						<div>
							<span>{user.name}</span>
							<span>{user.status}</span>
						</div>
					</div>
					{
						user.followed
							? <button onClick={() => props.unfollow(user.id)} >Отписаться</button>
							: <button onClick={() => props.follow(user.id)} >Подписаться</button>
					}
					<div className={s.userLocation}>
						<span>'user.location.city',</span>
						<span>'user.location.country'</span>
					</div>
				</div>
			})
		}
	</div >
}

export default User