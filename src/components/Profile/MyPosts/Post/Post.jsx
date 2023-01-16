import s from './Post.module.css'

const Post = (props) => {
	return (
		<div>
			<div className={s.item}>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRsxrFYfjW8TeqmRXSl5Xjh_K01u89yryTA&usqp=CAU" alt="" />
				{props.messege}
			</div>
			<span> like {props.like}</span>
		</div>
	)
}

export default Post