import React from 'react'
import Post from './Post/Post'


const MyPosts = (props) => {
	const postElemets = props.postsData.map((p) => {
		return (
			<Post messege={p.massege} like={p.like} />
		)
	})

	let newText = React.createRef()
	let addPostBtn = () => {
		props.addPost()
	}

	let addOnChange = () => {
		let text = newText.current.value
		props.updateNewPostText(text)
	}
	return (
		<div>
			<h3>My Post</h3>
			<div>
				<div>
					<textarea onChange={addOnChange} ref={newText} value={props.newValueText} />
				</div>
				<div>
					<button onClick={addPostBtn} >add post</button>
				</div>
			</div>
			{postElemets}
		</div >
	)
}

export default MyPosts