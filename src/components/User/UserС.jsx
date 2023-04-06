import axios from 'axios'
import React from 'react'
import s from './User.module.css'

class User extends React.Component {
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUser(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanget = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`)
			.then(response => {
				this.props.setUser(response.data.items)
			})
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		let page = []

		for (let i = 1; i <= pagesCount; i++) {
			page.push(i)
		}

		return <div className={s.userBody}>
			<div className={s.styledNums}>
				{page.map(p => {
					return <span className={this.props.currentPage === p ? s.styledNumActive : s.styledNum}
						onClick={() => this.onPageChanget(p)}>{p}</span>
				})}
			</div>
			{
				this.props.usersData.map((user) => {
					return <div className={s.userWrapper}>
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
								? <button onClick={() => this.props.unfollow(user.id)} >Отписаться</button>
								: <button onClick={() => this.props.follow(user.id)} >Подписаться</button>
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
}

export default User