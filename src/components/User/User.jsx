import s from './User.module.css'


const User = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let page = []
	for (let i = 1; i <= pagesCount; i++) {
		page.push(i)
	}

	return (
		<div className={s.userBody}>
			<div className={s.styledNums}>
				{page.map((p, i) => {
					return <span key={i} className={props.currentPage === p ? s.styledNumActive : s.styledNum}
						onClick={() => props.onPageChanget(p)}>{p}</span>
				})}
			</div>
			{
				props.usersData.map((user, i) => {
					return <div key={i} className={s.userWrapper}>
						<div className={s.userInfo}>
							<img alt='' src={
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
	)
}

export { User }