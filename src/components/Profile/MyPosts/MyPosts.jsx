import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
	const postElemets = props.postsData.map((p) => {
		return (
			<Post messege={p.massege} like={p.like} />
		)
	})

	let newText = React.createRef()
	let addPostBtn = () => {
		let text = newText.current.value
		props.addPost(text)
	}

	return (
		<div>
			<h3>My Post</h3>
			<div>
				<div>
					<textarea ref={newText}></textarea>
				</div>
				<div>
					<button onClick={addPostBtn} >add post</button>
				</div>
			</div>
			{postElemets}
		</div>
	)
}

export default MyPosts