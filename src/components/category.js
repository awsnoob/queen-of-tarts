import React from 'react'
import PostLink from './post-link'

const Category = ({ info, posts }) => {
	const Posts = posts.map(post => {
		return <PostLink key={post.node.id} post={post.node} />
	})
	return (
		<div style={{ paddingBottom: '3rem' }}>
			<h1 style={{ marginBottom: '1.5rem' }}>{info.name}</h1>
			{Posts}
		</div>
	)
}

export default Category
