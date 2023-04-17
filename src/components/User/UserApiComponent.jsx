import axios from 'axios'
import React from 'react'
import { User } from './User'

class UserApiComponent extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
		return (
			<User
				onPageChanget={this.onPageChanget}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				usersData={this.props.usersData}
			/>
		)
	}
}

export { UserApiComponent }